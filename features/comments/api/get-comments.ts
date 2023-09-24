import { axios } from "@/lib/axios"
import { useQuery } from "@tanstack/react-query"
import { CommentsResponse } from "../types"

export const getComments = ({ reviewId }: { reviewId: string }): Promise<CommentsResponse[]> => {
    return axios.get(`/api/comments/${reviewId}`)
}
// TODO:times 
export const useComments = ({ reviewId }: { reviewId: string }) => {
    return useQuery({
        queryFn: () => getComments({ reviewId }),
        queryKey: ['comments', reviewId],
        refetchInterval: 1000 * 5,
    })
}