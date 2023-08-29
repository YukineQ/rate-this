import axios, { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { toast } from "react-hot-toast";

export type SignUpCredendialsDTO = {
    username: string;
    email: string;
    password: string;
}

export const signUpWithCredentials = (
    data: SignUpCredendialsDTO
) => {
    return axios.post('/api/register', data)
}

export const useSignUp = () => {
    return useMutation({
        mutationFn: signUpWithCredentials,
        onError: (error: AxiosError) => {
            const message = error.response?.data || error.message
            toast.error(String(message))
        },
    })
}
