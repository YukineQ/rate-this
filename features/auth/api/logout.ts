import { signOut } from 'next-auth/react'
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useLogout = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: () => signOut(),
        onSuccess: () => {
            queryClient.setQueryData(["authentificated_user"], null)
            window.location.reload()
        }
    })
}