import { axios } from "@/lib/axios";
import { Category } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

export const getCategories = (): Promise<Category[]> => {
    return axios.get('/api/categories')
}

export const useCategories = () => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: () => getCategories(),
    })
}