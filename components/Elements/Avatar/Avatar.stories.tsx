import { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './Avatar';

const meta: Meta = {
    title: 'Components/Elements/Avatar',
    component: Avatar,
}

export default meta
type Story = StoryObj<typeof Avatar>;


export const CircleAvatar: Story = {
    args: {
        variant: 'circle',
        className: 'ring ring-1'
    }
} 

export const RoundedAvatar: Story = {
    args: {
        variant: 'rounded',
        className: 'ring ring-1'
    }
}