import z from "zod"

export const loginSchema =  z.object({
    email: z.email(),
    password: z.string()
})


export const signupSchema =  z.object({
    name: z.string(),
    email: z.email(),
    password: z.string()
})