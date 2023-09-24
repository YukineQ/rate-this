import React from 'react'
import { useComments } from '../api/get-comments';
import { Spinner } from '@/components/Elements/Spinner';
import { LuArchive } from 'react-icons/lu';
import { AiFillFire } from 'react-icons/ai';
import { Avatar } from '@/components/Elements/Avatar';
import { formatDate } from '@/utils/format';

type CommentsListProps = {
    reviewId: string;
}
//TODO: delete
const CommentsList = ({ reviewId }: CommentsListProps) => {
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
                    <div className='inline-flex items-center gap-2'>
                        <Avatar size='xs' url={comment.user.image} />
                        <p className='text-sm font-semibold'>{comment.user.email}</p>
                        <p className='text-sm text-gray-500 pl-2'>{formatDate(comment.updatedAt)}</p>
                    </div>
                    <p className='text-muted-foreground'>{comment.text}</p>
                </div>
            ))}
        </div>
    )
}

export default CommentsList