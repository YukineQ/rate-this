import { twMerge } from "tailwind-merge"

function PageHeader({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <section
            className={twMerge(
                "relative flex flex-col items-start gap-1 pt-2 md:pt-4",
                className
            )}
            {...props}
        >
            {children}
        </section>
    )
}

function PageHeaderHeading({
    className,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h1
            className={twMerge(
                "text-xl font-semibold leading-tight tracking-tighter md:text-2xl lg:leading-[1.1]",
                className
            )}
            {...props}
        />
    )
}

function PageHeaderDescription({
    className,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            className={twMerge(
                "text-sm text-gray-500 sm:text-base",
                className
            )}
            {...props}
        />
    )
}

export { PageHeader, PageHeaderHeading, PageHeaderDescription }