"use client"

import { Button } from '@/components/Elements/Button';
import { Form } from '@/components/Elements/Form';
import { Input } from '@/components/Elements/Input';
import * as yup from 'yup'

const schema = yup.object({
    username: yup.string().min(3).required(),
    email: yup.string().email().required(),
    password: yup.string().min(6),
})

type SignUpValues = {
    username: string;
    email: string;
    password: string;
}

export default function SignUp() {
    return (
        <div>
            <Form<SignUpValues, typeof schema>
                onSubmit={() => { }}
                schema={schema}
            >
                {({ register, formState }) => (
                    <>
                        <Input
                            placeholder='example'
                            {...register('username')}
                            error={formState.errors['username']}
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
                            <Button type='submit' className='w-full'>Sign up</Button>
                        </div>
                    </>
                )}
            </Form>
            <p className='text-sm text-gray-500 text-center pt-2'>Already have an account?<span className='pl-1'>Sign in</span></p>
        </div>
    )
}