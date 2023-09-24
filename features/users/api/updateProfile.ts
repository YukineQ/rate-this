import useUser from "@/lib/currentUser";
import { axios } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export type UpdateProfileDTO = {
    data: {
        name: string;
        email: string;
        bio: string;
    }
}

export const updateProfile = ({ data }: UpdateProfileDTO) => {
    return axios.patch(`api/users/me`, data)
}

export const useUpdateProfile = () => {
    const userQuery = useUser()
    return useMutation({
        onSuccess: () => {
            toast.success('Profile updated.')
            userQuery.refetch()
        },
        mutationFn: updateProfile,
    })
}