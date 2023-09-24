import React from 'react'
import * as yup from 'yup'

import { Form } from '@/components/Form';
import { Input } from '@/components/Elements/Input';
import { Button } from '@/components/Elements/Button';
import { Link } from '@/components/Elements/Link';
import { useSignUp } from "../api/sign-up";

const schema = yup.object({
    name: yup.string().min(3).required(),
    email: yup.string().email().required(),
    password: yup.string().min(6),
})

type SignUpValues = {
    name: string;
    email: string;
    password: string;
}

type SignUpProps = {
    onSuccess: () => void;
}

export const SignUpForm = ({ onSuccess }: SignUpProps) => {
    const signUp = useSignUp()

    return (
        <>
            <Form<SignUpValues, typeof schema>
                onSubmit={async (values) => {
                    await signUp.mutateAsync(values)
                    onSuccess()
                }}
                schema={schema}
            >
                {({ register, formState }) => (
                    <>
                        <Input
                            placeholder='example'
                            {...register('name')}
                            error={formState.errors['name']}
                        />
                        <Input
                            type='email'
                            placeholder='name@example.com'
                            {...register('email')}
                            error={formState.errors['email']}
                        />
                        <Input
                            type='password'
                            placeholder='●●●●●●●●●●●●'
                            {...register('password')}
                            error={formState.errors['password']}
                        />
                        <div className='pt-2'>
                            <Button type='submit'>Sign up</Button>
                        </div>
                    </>
                )}
            </Form>
            <p className='inline-flex w-full justify-center text-sm text-muted-foreground pt-2'>
                Already have an account?
                <Link variant='underline' href='../sign-in' className='px-1'>
                    Sign in
                </Link>
            </p>
        </>
    )
}