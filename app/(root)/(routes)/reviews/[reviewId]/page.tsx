'use client'

import { Button } from "@/components/Elements/Button"
import { CopyToClipboard } from "@/components/Elements/CopyToClipboard"
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/Elements/Header"
import { Separator } from "@/components/Elements/Separator"
import { Spinner } from "@/components/Elements/Spinner"
import { MDPreview } from "@/components/MDXEditor/MDPreview"
import { Comments } from "@/features/comments/components/comments"
import ToggleReaction from "@/features/reactions/components/toggle-reaction"
import { axios } from "@/lib/axios"
import { formatDate } from "@/utils/format"
import { Category, Image, Review, ReviewTags, Tag } from "@prisma/client"
import { useQuery } from "@tanstack/react-query"
import { toast } from "react-hot-toast"
import { BsLink45Deg } from 'react-icons/bs'

type ReviewResponse = {
    category: Category;
    images: Image[];
    tags: (ReviewTags & { tag: Tag })[];
    user: { email: string }
} & Review

const getReview = ({ reviewId }: { reviewId: string }): Promise<ReviewResponse> => {
    return axios.get(`/api/reviews/${reviewId}`)
}

const useReview = ({ reviewId }: { reviewId: string }) => {
    return useQuery({
        queryFn: () => getReview({ reviewId }),
        queryKey: ['review', reviewId]
    })
}

export default function ReviewIdPage({
    params
}: {
    params: { reviewId: string }
}) {
    const reviewQuery = useReview({ reviewId: params.reviewId })

    if (reviewQuery.isLoading) {
        return (
            <div className="flex h-full items-center justify-center">
                <Spinner size="md" />
            </div>
        )
    }

    if (!reviewQuery.data) return null

    return (
        <div className="mx-auto max-w-3xl mt-4">
            <div className="inline-flex gap-2">
                {reviewQuery.data.tags.map((tag) => (
                    <div
                        key={tag.tagId}
                        className='
                        inline-flex 
                        items-center 
                        rounded-md 
                        text-foreground
                        border
                        border-border
                        px-2.5 
                        py-0.5 
                        text-xs
                        font-semibold
                '>
                        {tag.tag.name}
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-between">
                <PageHeader>
                    <PageHeaderHeading>{reviewQuery.data.title}</PageHeaderHeading>
                    <PageHeaderDescription>
                        Here you can write your opinion about some kind of creation.
                    </PageHeaderDescription>
                </PageHeader>
                <div className="
                    flex 
                    items-center 
                    justify-center 
                    h-16 w-16 
                    rounded-md 
                    bg-muted
                    text-3xl 
                    font-bold
                ">
                    {reviewQuery.data.rate}
                </div>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
                <p className="text-muted-foreground">By {reviewQuery.data.user.email} <span className="text-xs ml-4">{formatDate(reviewQuery.data.updatedAt)}</span></p>
                <CopyToClipboard
                    textToCopy={window.location.href}
                    onCopy={() => toast.success('Link copied.')}
                >
                    <Button
                        variant='outline'
                        size='sm'
                        className="w-fit"
                        startIcon={<BsLink45Deg size={16} />}
                    >
                        Copy link
                    </Button>
                </CopyToClipboard>
            </div>
            <Separator />
            <div className="py-4">
                <MDPreview value={reviewQuery.data.content} />
            </div>
            <ToggleReaction reviewId={params.reviewId} />
            <Separator />
            <div className="py-6">
                <Comments reviewId={params.reviewId} />
            </div>
        </div>
    )
}