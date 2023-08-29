"use client"

import { useRouter } from "next/navigation"

import { SignInForm } from "@/features/auth/components"

export const SignIn = () => {
    const router = useRouter()

    return (
        <SignInForm onSucces={() => router.push('/')} />
    )
}