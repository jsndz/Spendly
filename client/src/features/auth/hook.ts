import { useAuthStore } from "@/store/auth"
import { useMutation, type UseMutationResult } from "@tanstack/react-query"
import { LoginUser, type LoginCredential, type LoginResponse } from "./api"

export const useLogin  = ():UseMutationResult<LoginResponse,Error,LoginCredential>=>{
    const setAuth = useAuthStore((s)=> s.setAuth)
    return useMutation<LoginResponse,Error,LoginCredential>({
        mutationFn:LoginUser,
        onSuccess:(data)=>{
            setAuth(data.name,data.email,data.token);
        }
    })
} 