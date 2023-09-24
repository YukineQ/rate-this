import { twMerge } from "tailwind-merge";

type SkeletonLoaderProps = React.ComponentPropsWithoutRef<"div">

const SkeletonLoader = ({
    children,
    className,
    ...props
}:
    SkeletonLoaderProps
) => {
    return (
        <div className={twMerge("animate-pulse flex", className)} {...props}>
            {children}
        </div>
    )
}

type SkeletonRectangleProps = {
    lines?: number;
    gap?: number;
    height?: number;
    className?: string;
    unEqualWidth?: boolean;
}

const SkeletonRectangle = ({
    lines = 1,
    gap = 4,
    height = 30,
    className = '',
    unEqualWidth,
}:
    SkeletonRectangleProps
) => {
    const items = new Array(lines || 1).fill('')
    const len = items.length
    const moreThatOne = len > 1
    return (
        <div className="w-full flex flex-col" style={{ rowGap: gap }}>
            {items.map((_, index) => {
                const width = index === len - 1 && unEqualWidth && moreThatOne ? 'w-1/2' : ''
                return (
                    <div
                        key={index}
                        style={{ height }}
                        className={twMerge(
                            "bg-gray-100 rounded-md",
                            className,
                            width
                        )}
                    />
                )
            })}
        </div>
    )
}

type SkeletonCircleProps = {
    className?: string;
    size?: number;
}

const SkeletonCircle = ({ className, size = 50 }: SkeletonCircleProps) => {
    return (
        <div
            className={twMerge(
                "rounded-full flex-shrink-0 bg-gray-200",
                className
            )}
            style={{ width: size, height: size }}
        />
    )
}

export { SkeletonLoader, SkeletonRectangle, SkeletonCircle }