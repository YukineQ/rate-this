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
