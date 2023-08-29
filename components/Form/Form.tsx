"use client"

import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, FieldValues, UseFormReturn, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { twMerge } from 'tailwind-merge'

type FormProps<TFormValues extends FieldValues, Schema> = {
    className?: string;
    onSubmit: SubmitHandler<TFormValues>;
    children: (method: UseFormReturn<TFormValues>) => React.ReactNode;
    schema: Schema;
    id?: string;
}

export const Form = <
    TFormValues extends FieldValues,
    Schema extends yup.AnyObjectSchema,
>({
    className,
    onSubmit,
    children,
    schema,
    id,
}: FormProps<TFormValues, Schema>) => {
    const methods = useForm<TFormValues>({ resolver: yupResolver(schema) })
    
    return (
        <form
            className={twMerge('space-y-2', className)}
            onSubmit={methods.handleSubmit(onSubmit)}
            id={id}
        >
            {children(methods)}
        </form>
    )
}