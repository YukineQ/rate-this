import { Button } from '@/components/Elements/Button'
import React from 'react'
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai'
import { useReaction } from '../api/get-reaction';
import { useToggleReaction } from '../api/toggle-reaction';

type ToggleReactionProps = {
    reviewId: string;
}

const ToggleReaction = ({ reviewId }: ToggleReactionProps) => {
    const reactionQuery = useReaction({ reviewId })
    const reactionMutation = useToggleReaction({ reviewId })

    const icon = reactionQuery.data?.hasLike ? <AiTwotoneHeart className='text-red-500' size={20} />: <AiOutlineHeart size={20} />

    return (
        <div>
            <Button
                size='md'
                variant='ghost'
                className='w-fit'
                startIcon={icon}
                isLoading={reactionQuery.isLoading}
                onClick={() => reactionMutation.mutateAsync()}
            >
                {reactionQuery.data?.count ? reactionQuery.data.count : ''}
            </Button>
        </div>
    )
}

export default ToggleReaction