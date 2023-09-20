import { getMe } from "@/features/users"
import { useQuery } from "@tanstack/react-query"

const useUser = () => {
    return useQuery({
        queryKey: ['authentificated_user'],
        queryFn: () => getMe(),
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: 0,
    })
}

export default useUser