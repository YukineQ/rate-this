import React, { useMemo } from 'react'
import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'
import { AiOutlineGithub } from 'react-icons/ai'

import { Button } from '@/components/Elements/Button'

export const SocialAuthButtons = () => {
    const authVariants = useMemo(() => [
        {
            label: "Google",
            startIcon: <FcGoogle size={20} />,
            onClick: () => signIn('google', { callbackUrl: '/' })
        },
        {
            label: "Github",
            startIcon: <AiOutlineGithub size={20} />,
            onClick: () => signIn('github', { callbackUrl: '/' })
        },
    ], [])

    return (
        <div className='space-y-2'>
            {authVariants.map(({ label, startIcon, onClick }, index) => (
                <Button
                    key={label + index}
                    variant='outline'
                    startIcon={startIcon}
                    onClick={onClick}
                >
                    {label}
                </Button>
            ))}
        </div>
    )
}