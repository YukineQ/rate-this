import { twMerge } from 'tailwind-merge'
import { FieldError } from 'react-hook-form'

type InputWrapperProps = {
    label?: string;
    className?: string;
    children: React.ReactNode;
    description?: string;
    error?: FieldError | undefined;
    isNative?: boolean;
}

export type InputWrapperPassThroughProps = Omit<InputWrapperProps, 'className' | 'children'>

export const InputWrapper = (props: InputWrapperProps) => {
    const { label, className, children, description, error, isNative = true } = props
    const Label = isNative ? `label` : `div`
    return (
        <div>
            <Label className={twMerge('block text-sm font-medium leading-none', className)}>
                {label}
                <div className='my-1.5'>{children}</div>
            </Label>
            {description && (
                <div role='contentinfo' aria-label={description} className='text-xs text-gray-500'>
                    {description}
                </div>
            )}
            {error?.message && (
                <div role='alert' aria-label={error.message} className='text-xs leading-none font-medium text-red-500'>
                    {error.message}
                </div>
            )}
        </div>
    )
}