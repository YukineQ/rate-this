import { axios } from "@/lib/axios"
import { User } from "@prisma/client"

export const getMe = ():Promise<User> => {
    return axios.get('/api/users/me') ?? null
}