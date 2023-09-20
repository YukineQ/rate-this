import { Meta, StoryObj } from "@storybook/react";
import { SkeletonCircle, SkeletonLoader, SkeletonRectangle } from "./Skeleton";

const meta: Meta<typeof SkeletonLoader> = {
    title: 'Components/Elements/Skeleton',
    component: SkeletonLoader,
}

export default meta
type Story = StoryObj<typeof SkeletonLoader>

const MySkeleton = () => {
    return (
        <SkeletonLoader className="w-80 gap-4">
            <SkeletonCircle />
            <SkeletonRectangle lines={4} gap={8}/>
        </SkeletonLoader>
    )
}

export const DefaultSkeleton: Story = {
    render: () => <MySkeleton />
}