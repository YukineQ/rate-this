import { twMerge } from "tailwind-merge";

const directions = {
    horizontal: 'w-full border-b my-3',
    vertical: 'h-full border-r mx-3',
}

type SeparatorProps = {
    direction?: keyof typeof directions;
    className?: string;
}

export const Separator = ({ direction = 'horizontal', className }: SeparatorProps) => {
    return (
        <div role='separator' className={twMerge(
            "relative border-border",
            directions[direction], 
            className)} />
    )
}