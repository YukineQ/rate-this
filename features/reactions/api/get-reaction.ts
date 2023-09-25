import { useQuery } from "@tanstack/react-query"
import { axios } from "@/lib/axios"
import { ReactionResponse } from "../types"

export const getReaction = ({ reviewId }: { reviewId: string }): Promise<ReactionResponse> => {
    return axios.get(`/api/reaction/${reviewId}`)
}

export const useReaction = ({ reviewId }: { reviewId: string }) => {
    return useQuery({
        queryKey: ['reaction', reviewId],
        queryFn: () => getReaction({ reviewId }),
        retry: 0,
    })
}