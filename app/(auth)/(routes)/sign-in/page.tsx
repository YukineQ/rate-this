"use client"

import * as yup from 'yup'

import { Form } from "@/components/Form";
import { Input } from '@/components/Elements/Input';
import { Button } from '@/components/Elements/Button';
import { Link } from '@/components/Elements/Link';

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
})

type SignInValues = {
    email: string;
    password: string;
}

export default function SignIn() {
    return (
        <>
            <Form<SignInValues, typeof schema>
                schema={schema}
                onSubmit={() => { }}
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
            <p className='text-sm text-gray-500 text-center pt-2'>
                Create new account?
                <Link href='../sign-up' className='pl-1'>
                    Sign up
                </Link>
            </p>
        </>
    )
}