import { Comment } from "@prisma/client"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { toast } from "react-hot-toast"
import { CommentsResponse } from "../types"
import useUser from "@/lib/currentUser"

export type CreateCommentDTO = {
    data: Pick<Comment, 'text' | 'reviewId'>
}

export const createComment = ({ data }: CreateCommentDTO) => {
    return axios.post('/api/comments', data)
}

export const useCreateComment = ({ reviewId }: { reviewId: string }) => {
    const queryClient = useQueryClient()
    const userQuery = useUser()
    return useMutation({
        onMutate: async (newComment) => {

            await queryClient.cancelQueries(['comments', reviewId])

            const previousComments = queryClient.getQueryData<CommentsResponse[]>(['comments', reviewId])

            queryClient.setQueriesData(
                ['comments', reviewId],
                [...(previousComments || []), { ...newComment.data, user: userQuery.data }]
            )

            return { previousComments }
        },
        onError: (_, __, context: any) => {
            if (context?.previousComments) {
                queryClient.setQueryData(['comments', reviewId], context.previousComments)
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['comments', reviewId])
            toast.success('Comment created.')
        },
        mutationFn: createComment,
    })
}