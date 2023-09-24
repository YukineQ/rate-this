import React from 'react'
import { InputWrapper, InputWrapperPassThroughProps } from "./InputWrapper";
import { twMerge } from 'tailwind-merge'

export type MultilineInputProps = InputWrapperPassThroughProps & {
    className?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

export const MultilineInput = React.forwardRef<HTMLTextAreaElement, MultilineInputProps>(
    ({ rows = 5, className, label, description, error, ...props }, ref) => {
        return (
            <InputWrapper label={label} description={description} error={error}>
                <textarea
                    ref={ref}
                    rows={rows}
                    className={twMerge(
                        'px-3 py-1 w-full rounded-md border border-border bg-primary text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400 transition placeholder:font-normal',
                        className
                    )}
                    {...props}
                />
            </InputWrapper>
        )
    })
MultilineInput.displayName = 'Input'