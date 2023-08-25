import * as yup from 'yup'

import { render, screen, waitFor } from '@/test/test-utils'
import userEvent from '@testing-library/user-event'
import { Form } from '../Form'
import { Input } from '@/components/Elements/Input'
import { Button } from '@/components/Elements/Button'

const testData = {
    username: 'example',
    password: '1234567',
}

const schema = yup.object({
    username: yup.string().min(4).required(),
    password: yup.string().required()
})

test('render and submit form', async () => {
    const handleSubmit = jest.fn()

    render(
        <Form<typeof testData, typeof schema> onSubmit={handleSubmit} schema={schema} id='test-form'>
            {({ register, formState }) => (
                <>
                    <Input
                        label='Username'
                        error={formState.errors['username']}
                        {...register('username')}
                    />
                    <Input
                        label='Password'
                        error={formState.errors['username']}
                        {...register('password')}
                    />
                    <Button type='submit' name='submit' className='w-full'>
                        Submit
                    </Button>
                </>
            )}
        </Form>
    )

    await userEvent.type(screen.getByLabelText(/username/i), testData.username)
    await userEvent.type(screen.getByLabelText(/password/i), testData.password)

    await userEvent.click(screen.getByRole('button', { name: /submit/i }))

    expect(handleSubmit).toHaveBeenCalledWith(testData, expect.anything())
})