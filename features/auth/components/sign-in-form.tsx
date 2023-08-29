import React from 'react'

import * as yup from 'yup'

import { Form } from '@/components/Form'
import { Input } from '@/components/Elements/Input'
import { Button } from '@/components/Elements/Button'
import { Link } from '@/components/Elements/Link'

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
})

type SignInValues = {
    email: string;
    password: string;
}

type SignInProps = {
    onSucces: () => void;
}

export const SignInForm = ({ onSucces }: SignInProps) => {
    return (
        <>
            <Form<SignInValues, typeof schema>
                schema={schema}
                onSubmit={() => {

                    onSucces()
                }}
            >
                {({ register, formState }) => (
                    <>
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
                            <Button type='submit' className='w-full'>Sign in</Button>
                        </div>
                    </>
                )}
            </Form>
            <p className='inline-flex w-full justify-center text-sm text-gray-500 pt-2'>
                Create new account?
                <Link href='../sign-up' className='px-1'>
                    Sign up
                </Link>
            </p>
        </>
    )
}