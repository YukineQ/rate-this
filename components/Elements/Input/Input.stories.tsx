import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
    title: 'Components/Elements/Input',
    component: Input,
    argTypes: {
        disabled: {
            options: [true, false],
            control: { type: 'boolean' }
        },
    },
    decorators: [
        (Story) => (
            <div className='w-80'>
                <Story />
            </div>
        )
    ]
}

export default meta
type Story = StoryObj<typeof Input>


export const InputWithLabels: Story = {
    args: {
        disabled: false,
        label: 'Username',
        description: 'This is your public display name.',
        placeholder: 'name@example.com',
    }
}

export const CleanInput: Story = {
    args: {
        type: 'password',
        placeholder: '●●●●●●●●●●●●'
    }
}