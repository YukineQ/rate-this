'use client'

import { Button } from "@/components/Elements/Button";
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/Elements/Header";
import { Separator } from "@/components/Elements/Separator";
import { Table } from "@/components/Elements/Table";
import { useReviews } from "@/features/reviews/api/getReviews";
import useUser from "@/lib/currentUser";
import { formatDate } from "@/utils/format";
import { removeMarkdown } from "@/utils/removeMarkdown";
import { Review } from "@prisma/client";
import { LuSlice, LuTrash2 } from "react-icons/lu";

export default function CurrentUserReviesPage() {
    const userQuery = useUser()
    const userReviewQuery = useReviews(userQuery.data?.id)

    if (!userReviewQuery.data) {
        return null
    }

    return (
        <>
            <PageHeader>
                <PageHeaderHeading>
                    Your reviews
                </PageHeaderHeading>
                <PageHeaderDescription>
                    Here you can view your reviews, create a new one, and edit old ones.
                </PageHeaderDescription>
            </PageHeader>
            <div className="pt-10">
                <Table<Review>
                    data={userReviewQuery.data}
                    columns={[
                        {
                            header: 'Title',
                            accessorKey: 'title',
                        },
                        {
                            header: 'Creation',
                            accessorKey: 'creation'
                        },
                        {
                            header: 'Rate',
                            accessorKey: 'rate'
                        },
                        {
                            header: 'Updated At',
                            accessorFn: row => formatDate(row.updatedAt),
                        },
                        {
                            header: '',
                            accessorKey: 'id',
                            cell: (id) => <Button variant='outline' size='sm' onClick={() => console.log(id.getValue())}>Preview</Button>,
                            enableSorting: false,
                        },
                        {
                            header: '',
                            accessorKey: 'id',
                            cell: (id) => <div className="space-x-2"><Button size='icon' variant='ghost' startIcon={<LuTrash2 className='text-red-500' size={16} />} onClick={() => console.log(id.getValue())} /><Button size='icon' variant='ghost' startIcon={<LuSlice size={16}/>} onClick={() => console.log(id.getValue())} /></div>,
                            enableSorting: false,
                        },
                    ]}
                />
            </div>
        </>
    )
}
