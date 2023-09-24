import { axios } from "@/lib/axios";
import { Category, Review } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

type ReviewResponse = {
    category: Category
} & Review

export const getReviews = (userId?: string): Promise<ReviewResponse[]> => {
    return axios.get('/api/reviews', {
        params: {
            userId: userId,
        }
    })
}

export const useReviews = (userId?: string) => {
    return useQuery({
        queryKey: ['reviews', userId],
        queryFn: () => getReviews(userId),
        retry: 0,
    })
}