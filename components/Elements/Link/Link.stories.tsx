import { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

const meta: Meta<typeof Link> = {
    title: 'Components/Elements/Link',
    component: Link,
}

export default meta
type Story = StoryObj<typeof Link>

export const DefaultLink: Story = {
    render: () => <Link href="/">Hello World</Link>
}