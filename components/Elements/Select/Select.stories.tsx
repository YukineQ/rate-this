import { Meta, StoryObj } from '@storybook/react'

import { Select } from './Select';

const meta: Meta = {
    title: 'Components/Elements/Select',
    component: Select,
    decorators: [
        (Story) => (
            <div className='w-48'>
                <Story />
            </div>
        )
    ]
}

export default meta
type Story = StoryObj<typeof Select>;

export const Default: Story = {
    args: {
        options: [
            {
                label: 'English',
                value: 'english',
                imageUrl: '/use.png',
            },
            {
                label: 'Russian',
                value: 'russian',
                imageUrl: '/russia.png',
            }
        ],
    }
}