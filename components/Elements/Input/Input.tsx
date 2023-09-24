import React from 'react'
import { InputWrapper, InputWrapperPassThroughProps } from "./InputWrapper";
import { twMerge } from 'tailwind-merge'

type InputProps = InputWrapperPassThroughProps & {
    className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ type = 'text', className, label, description, error, ...props }, ref) => {
        return (
            <InputWrapper label={label} description={description} error={error}>
                <input
                    ref={ref}
                    type={type}
                    className={twMerge(
                        'h-9 px-3 py-1 w-full rounded-md bg-primary border border-border text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400 transition placeholder:font-normal text-foreground disabled:text-opacity-50',
                        className
                    )}
                    {...props}
                />
            </InputWrapper>
        )
    })
Input.displayName = 'Input'