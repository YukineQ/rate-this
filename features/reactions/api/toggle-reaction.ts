import { useMutation, useQueryClient } from "@tanstack/react-query"
import { axios } from "@/lib/axios"
import { ReactionResponse } from "../types"
import { useReaction } from "./get-reaction"

export const makeReaction = ({ reviewId }: { reviewId: string }) => {
    return axios.post('/api/reaction', { reviewId })
}

export const deleteReaction = ({ reviewId }: { reviewId: string }) => {
    return axios.delete(`/api/reaction/${reviewId}`)
}

export const useToggleReaction = ({ reviewId }: { reviewId: string }) => {
    const reactionQuery = useReaction({ reviewId })
    const queryClient = useQueryClient()

    return useMutation({
        onMutate: async () => {
            await queryClient.cancelQueries(['reaction', reviewId])

            const previousReaction = queryClient.getQueryData<ReactionResponse>(['reaction', reviewId])

            if (!previousReaction?.count) return null

            let newState;

            if (previousReaction.hasLike) {
                newState = { hasLike: false, count: previousReaction.count - 1 }
                queryClient.setQueryData(
                    ['reaction', reviewId],
                    newState,
                )
            } else {
                newState = { hasLike: true, count: previousReaction.count + 1 }
                queryClient.setQueryData(
                    ['reaction', reviewId],
                    newState
                )
            }

            return newState
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['reaction', reviewId])
        },
        onError: (_, __, context: any) => {
            if (context?.previousReaction) {
                queryClient.setQueryData(['reaction', reviewId], context.previousReaction)
            }
        },
        mutationFn: () =>
            reactionQuery && reactionQuery.data!.hasLike ? deleteReaction({ reviewId }) : makeReaction({ reviewId })
    })
}