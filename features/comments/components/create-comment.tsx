import { Button } from '@/components/Elements/Button';
import { MultilineInput } from '@/components/Elements/Input';
import { Form } from '@/components/Form';
import React from 'react'
import * as yup from 'yup'
import { CreateCommentDTO, useCreateComment } from '../api/create-comments';
import useUser from '@/lib/currentUser';

const schema = yup.object({
    text: yup.string().required(),
})

type CreateCommentProps = {
    reviewId: string;
}

export const CreateComment = ({ reviewId }: CreateCommentProps) => {
    const createCommentMutation = useCreateComment({ reviewId })
    const userQuery = useUser()

    if (!userQuery.data?.id) {
        return null
    }
    //TODO: move to commetns
    return (
        <>
            <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                Discussion (20)
            </h3>
            <div className="
                relative
                my-4
                rounded-md
                border 
                border-border
                text-sm 
                shadow-sm 
                focus-within:ring-1
                ring-slate-400
                focus-visible:ring-slate-400
                pb-10
            ">
                <Form<CreateCommentDTO['data'], typeof schema>
                    onSubmit={async (values) => {
                        await createCommentMutation.mutateAsync({
                            data: {
                                text: values.text,
                                reviewId,
                            }
                        })
                    }}
                    schema={schema}
                    resetOnSuccess
                >
                    {({ register }) => (
                        <>
                            <MultilineInput
                                placeholder='Write a comment...'
                                rows={3}
                                className="resize-none border-none shadow-none bg-transparent focus-visible:ring-0 placeholder:text-muted-foreground"
                                {...register('text')}
                            />
                            <Button
                                type='submit'
                                className='absolute w-fit right-1 bottom-1'
                                isLoading={createCommentMutation.isLoading}
                            >
                                Post comment
                            </Button>
                        </>
                    )}
                </Form>
            </div>
        </>
    )
}
