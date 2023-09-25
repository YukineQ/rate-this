import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/Elements/Header";
import { Separator } from "@/components/Elements/Separator";
import { ReviewsList } from "@/features/reviews";

export default function ReviewsPage() {
    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Dashboard</PageHeaderHeading>
                <PageHeaderDescription>
                    Here you can find resent reviews.
                </PageHeaderDescription>
            </PageHeader>
            <Separator />
            <div className="pt-4 h-full">
                <ReviewsList />
            </div>
        </>
    )
}
