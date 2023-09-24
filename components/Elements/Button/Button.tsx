import React from 'react'
import { twMerge } from 'tailwind-merge';
import { Spinner } from '../Spinner';

const variants = {
    default: 'bg-button hover:bg-button/90 shadow',
    danger: 'bg-red-500 hover:bg-red-500/90 shadow-sm',
    outline: 'border border-muted shadow-sm bg-primary hover:bg-accent text-foreground',
    ghost: 'hover:bg-primary-foreground text-ghost',
}

const sizes = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-9 px-4 py-2',
    lg: 'h-10 px-8',
    icon: 'h-9 w-9',
}

type IconProps =
    | { startIcon: React.ReactElement; endIcon?: never }
    | { endIcon: React.ReactElement; startIcon?: never }
    | { startIcon?: undefined; endIcon?: undefined }

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: keyof typeof variants;
    size?: keyof typeof sizes;
    isLoading?: boolean;
} & IconProps

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = 'default',
            size = 'md',
            isLoading = false,
            startIcon,
            endIcon,
            type = 'button',
            ...props
        },
        ref
    ) => {
        return (
            <button
                ref={ref}
                type={type}
                className={twMerge(
                    'inline-flex w-full justify-center items-center font-medium transition rounded-md text-sm disabled:opacity-70 disabled:pointer-events-none whitespace-nowrap text-primary-foreground',
                    sizes[size],
                    variants[variant],
                    className
                )}
                {...props}
            >
                <div>
                    {isLoading && <Spinner size='xs' />}
                    {!isLoading && startIcon}
                </div>
                {size != 'icon' && (
                    <span className='mx-1.5'>{props.children}</span>
                )}
                {!isLoading && endIcon}
            </button>
        )
    }
)
Button.displayName = 'Button'