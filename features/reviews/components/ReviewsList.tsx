'use client'

import React from 'react'
import { useReviews } from '../api/getReviews'
import { Button } from '@/components/Elements/Button'
import { HiArrowSmallRight } from 'react-icons/hi2'
import { RxRocket } from 'react-icons/rx'
import { Spinner } from '@/components/Elements/Spinner'
import { formatDate } from '@/utils/format'
import { removeMarkdown } from '@/utils/removeMarkdown'
import { Link } from '@/components/Elements/Link'

export const ReviewsList = () => {
    const reviewsQuery = useReviews()

    if (!reviewsQuery.data) {
        return (
            <div className='flex h-full justify-center items-center'>
                <Spinner size='md' />
            </div>
        )
    }

    return (
        <>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                {reviewsQuery.data?.map((review) => (
                    <div
                        key={review.id}
                        className='
                            border 
                            border-border
                            rounded-lg 
                            shadow 
                            hover:bg-card-hover
                            hover:text-white 
                            bg-primary
                            transition-colors
                            duration-400 
                            cursor-default
                            group 
                        '
                    >
                        <div className="p-5">
                            <h5 className="
                                mb-2 
                                text-2xl 
                                font-bold 
                                tracking-tight 
                                overflow-hidden 
                                whitespace-normal
                                text-ellipsis
                                text-foreground
                                group-hover:text-white 
                            ">
                                {review.title}
                            </h5>
                            <p className='line-clamp-6 text-sm my-4'>
                                {removeMarkdown(review.content)}
                            </p>
                            <p className="
                                inline-flex
                                items-center
                                gap-2
                                mb-3 
                                font-medium 
                                group-hover:text-white 
                                tracking-tight
                            ">
                                <RxRocket size={18} />
                                {review.creation}
                            </p>
                            <div className='flex items-center justify-between mb-4'>
                                <div className='space-x-2'>
                                    <div className='
                                        inline-flex 
                                        items-center 
                                        rounded-md 
                                        border 
                                        px-2.5 
                                        py-0.5 
                                        text-xs
                                        font-semibold 
                                        group-hover:text-white
                                    '>
                                        {review.category.name}
                                    </div>
                                    <div className='
                                        inline-flex 
                                        items-center 
                                        rounded-md 
                                        border 
                                        px-2.5 
                                        py-0.5 
                                        text-xs
                                        font-semibold 
                                        group-hover:text-white
                                    '>
                                        rate: {review.rate}/10
                                    </div>
                                </div>
                                <p className='text-xs text-muted-foreground'>{formatDate(review.createdAt)}</p>
                            </div>
                            <Link href={`reviews/${review.id}`}>
                                <Button
                                    className='group-hover:bg-white group-hover:text-black group/button'
                                    endIcon={
                                        <HiArrowSmallRight
                                            className='mt-1 group-hover/button:translate-x-3 transition ease-in-out origin-center'
                                            size={18}
                                        />
                                    }
                                >
                                    Read more
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
