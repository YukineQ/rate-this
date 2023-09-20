import NextLink from 'next/link'
import { twMerge } from 'tailwind-merge'

const variants = {
    'underline': 'underline underline-offset-2',
    'default': '',
}

type LinkProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
    variant?: keyof typeof variants;
}

export const Link = ({ href, children, className, variant = 'default' }: LinkProps) => {
    return (
        <NextLink href={href} className={twMerge('text-gray-500 hover:text-gray-700 transition', className, variants[variant])}>
            {children}
        </NextLink>
    )
}