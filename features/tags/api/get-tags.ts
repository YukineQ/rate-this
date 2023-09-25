import { axios } from "@/lib/axios"
import { Tag } from "@prisma/client"
import { useQuery } from "@tanstack/react-query"

export const getTags = (): Promise<Tag[]> => {
    return axios.get('/api/tags')
}

export const useTags = () => {
    return useQuery({
        queryFn: getTags,
        queryKey: ['tags']
    })
}