import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/Elements/Header";
import { Separator } from "@/components/Elements/Separator";
import { ReviewsList } from "@/features/reviews";

export default function ReviewsPage() {
    return (
        <>
            <PageHeader>
                <PageHeaderHeading>New Review</PageHeaderHeading>
                <PageHeaderDescription>
                    Here you can write your opinion about some kind of creation.
                </PageHeaderDescription>
            </PageHeader>
            <Separator />
            <div className="pt-4">
                <ReviewsList />
            </div>
        </>
    )
}
