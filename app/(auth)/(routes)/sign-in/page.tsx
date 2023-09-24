"use client"

import { useRouter } from 'next/navigation'

import { SignInForm } from "@/features/auth/components"

export default function SignInPage() {
    const router = useRouter()

    return <SignInForm onSuccess={() => router.push('/')} />
}