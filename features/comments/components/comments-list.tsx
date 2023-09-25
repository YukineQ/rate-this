import React from 'react'
import { useComments } from '../api/get-comments';
import { Spinner } from '@/components/Elements/Spinner';
import { AiFillFire } from 'react-icons/ai';
import { Avatar } from '@/components/Elements/Avatar';
import { formatDate } from '@/utils/format';
import { Button } from '@/components/Elements/Button';
import { Authorization, POLICIES } from '@/lib/authorization';
import useUser from '@/lib/currentUser';
import { User } from '@prisma/client';

type CommentsListProps = {
    reviewId: string;
}

const CommentsList = ({ reviewId }: CommentsListProps) => {
    const userQuery = useUser()
    const commentsQuery = useComments({ reviewId })

    if (commentsQuery.isLoading) {
        return (
            <div className="w-full h-48 flex justify-center items-center">
                <Spinner size="md" />
            </div>
        )
    }

    if (!commentsQuery.data?.length) {
        return (
            <div
                aria-label="comments"
                className="bg-primary select-none h-40 flex justify-center items-center flex-col"
            >
                <AiFillFire size={40} className='text-red-500' />
                <h4 className='text-lg tracking-tight text-muted-foreground'>Be the first to comment</h4>
            </div>
        )
    }

    return (
        <div className='pt-8 flex flex-col gap-6'>
            {commentsQuery.data.map(comment => (
                <div key={comment.id} className='flex flex-col w-full p-2 space-y-3'>
                    <div className='inline-flex items-center justify-between'>
                        <div className='inline-flex gap-2 items-center'>
                            <Avatar size='xs' url={comment.user.image} />
                            <p className='text-sm font-semibold'>{comment.user.email}</p>
                            <p className='text-sm text-gray-500 pl-2'>{formatDate(comment.updatedAt)}</p>
                        </div>
                        <Authorization policyCheck={POLICIES['comment:delete'](userQuery.data as User, comment)}>
                            <Button className='w-fit' variant='ghost' size='sm'>Delete</Button>
                        </Authorization>
                    </div>
                    <p className='text-muted-foreground'>{comment.text}</p>
                </div>
            ))}
        </div>
    )
}

export default CommentsList