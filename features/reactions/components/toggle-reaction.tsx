import { Button } from '@/components/Elements/Button'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

type Props = {}

const ToggleReaction = (props: Props) => {
    return (
        <div>
            <Button size='md' variant='ghost' className='w-fit' startIcon={<AiOutlineHeart size={20} />}>123</Button>
        </div>
    )
}

export default ToggleReaction