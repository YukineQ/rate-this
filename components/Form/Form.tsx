import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, FieldValues, UseFormReturn, useForm, DefaultValues } from 'react-hook-form'
import * as yup from 'yup'
import { twMerge } from 'tailwind-merge'
import { useEffect } from 'react';

type FormProps<TFormValues extends FieldValues, Schema> = {
    className?: string;
    onSubmit: SubmitHandler<TFormValues>;
    children: (method: UseFormReturn<TFormValues>) => React.ReactNode;
    schema: Schema;
    id?: string;
    initialData?: DefaultValues<TFormValues>;
    resetOnSuccess?: boolean;
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
    initialData,
    resetOnSuccess = false,
}: FormProps<TFormValues, Schema>) => {
    const methods = useForm<TFormValues>({ resolver: yupResolver(schema), defaultValues: initialData })

    useEffect(() => {
        if (resetOnSuccess) {
            methods.reset()
        }
    }, [methods.formState.isSubmitSuccessful])

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