"use client"

import { useRouter } from 'next/navigation'

import { SignUpForm } from '@/features/auth/components';

export default function SignUpPage() {
    const router = useRouter()

    return <SignUpForm onSucces={() => { router.push('/sign-in') }} />
}