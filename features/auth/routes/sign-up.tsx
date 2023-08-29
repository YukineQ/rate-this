"use client"

import { useRouter } from "next/navigation"

import { SignUpForm } from "@/features/auth/components"

export const SignUp = () => {
    const router = useRouter()

    return (
        <SignUpForm onSucces={() => router.push('/')} />
    )
}