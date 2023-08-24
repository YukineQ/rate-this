import { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from './Button'

const meta: Meta = {
    title: 'Components/Elements/Button',
    component: Button,
}

export default meta
type Story = StoryObj<ButtonProps>;

export const Default: Story = {
    args: {
        variant: 'default',
        children: 'Default'
    }
}

export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'Outline'
    }
}

export const Danger: Story = {
    args: {
        variant: 'danger',
        children: 'Danger'
    }
}

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        children: 'Ghost'
    }
}