import React from 'react'
import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { twMerge } from 'tailwind-merge';

const sizes = {
    'md': 'w-[200px] h-[200px]'
}

const variants = {
    'circle': 'rounded-full',
    'rounded': 'rounded-md'
}

type ImageProps = {
    variant?: keyof typeof variants;
    size?: keyof typeof sizes;
    className?: string;
    children?: React.ReactNode;
} & NextImageProps

export type ImagePassThroughProps = Pick<ImageProps, 'variant'>

export const Image = ({ variant = 'rounded', size = 'md', className, children, ...props }: ImageProps) => {
    return (
        <div
            key={props.key}
            className={twMerge(
                'relative w-[200px] h-[200px] rounded-md overflow-hidden',
                variants[variant],
                sizes[size],
                className
            )}
        >
            {children}
            <NextImage className='object-cover' fill {...props} />
        </div>
    )
}

export default Image