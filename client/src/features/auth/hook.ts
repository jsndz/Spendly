import { useAuthStore } from "@/store/auth"
import { useMutation, type UseMutationResult } from "@tanstack/react-query"
import { LoginUser, SignupUser, type LoginCredential, type LoginResponse, type SignUpCredential, type SignupResponse } from "./api"
import { useNavigate } from "react-router-dom"

export const useLogin  = ():UseMutationResult<LoginResponse,Error,LoginCredential>=>{
    const setAuth = useAuthStore((s)=> s.setAuth)
    const navigate = useNavigate();
    return useMutation<LoginResponse,Error,LoginCredential>({
        mutationFn:LoginUser,
        onSuccess:(data)=>{
            setAuth(data.user.name,data.user.email,data.user.id);
            navigate("/dashboard", { replace: true });
        }
    })
} 

export const useSignup  = ():UseMutationResult<SignupResponse,Error,SignUpCredential>=>{
    const setAuth = useAuthStore((s)=> s.setAuth)
    const navigate = useNavigate();
    return useMutation<SignupResponse,Error,SignUpCredential>({
        mutationFn:SignupUser,
        onSuccess:(data)=>{
            setAuth(data.user.name,data.user.email,data.user.id);
            navigate("/dashboard", { replace: true });
        }
    })
} 