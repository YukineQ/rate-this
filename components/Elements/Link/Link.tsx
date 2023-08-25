import NextLink from 'next/link'

import { twMerge } from 'tailwind-merge'

type LinkProps = {
    href: string;
    children: React.ReactNode;
    className?: string
}

export const Link = ({ href, children, className }: LinkProps) => {
    return (
        <NextLink href={href} className={twMerge('text-gray-500 underline underline-offset-2 hover:text-gray-700 transition', className)}>
            {children}
        </NextLink>
    )
}