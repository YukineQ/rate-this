import React from 'react'
import Image from "next/image"
import { twMerge } from 'tailwind-merge'

const FALLBACK_AVATAR_URL = '/fallback_avatar.jpg'
const FALLBACK_AVATAR_ALT_TEXT = 'user avatar'

const sizes = {
    xs: 'h-7 w-7',
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
}

const variants = {
    circle: 'rounded-full',
    rounded: 'rounded-md',
}

type AvatarProps = {
    url?: string | null;
    alt?: string;
    className?: string;
    variant?: keyof typeof variants;
    size?: keyof typeof sizes;
}

export const Avatar = ({
    url = FALLBACK_AVATAR_URL,
    alt = FALLBACK_AVATAR_ALT_TEXT,
    className = '',
    variant = 'circle',
    size = 'sm'
}: AvatarProps) => {
    const [srcToRender, setSrcToRender] = React.useState(url)
    return (
        <div
            className={twMerge(
                'overflow-hidden ring-1 ring-gray-300 hover:bg-gray-300 cursor-pointer hover:opacity-70 transition',
                sizes[size],
                variants[variant],
                className,
            )}
        >
            <Image
                src={srcToRender ?? FALLBACK_AVATAR_URL}
                alt={alt}
                width={0}
                height={0}
                sizes='100vh'
                className='h-full w-auto object-cover'
                onError={() => setSrcToRender(FALLBACK_AVATAR_URL)}
            />
        </div>
    )
}