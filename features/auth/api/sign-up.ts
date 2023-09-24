import axios, { AxiosError } from "axios";

import { User } from "@prisma/client";
import { useMutation } from "@tanstack/react-query"
import { toast } from "react-hot-toast";

export type SignUpCredendialsDTO = {
    name: string;
    email: string;
    password: string;
}

export const signUpWithCredentials = (
    data: SignUpCredendialsDTO
): Promise<User> => {
    return axios.post('/api/register', data)
}

export const useSignUp = () => {
    return useMutation({
        mutationFn: signUpWithCredentials,
        onSuccess: () => {
            toast.success('Account created.')
        },
        onError: (error: AxiosError) => {
            console.log(error)
            const message = error.response?.data || error.message
            toast.error(String(message))
        },
    })
}
