import { Spinner } from "@/components/Elements/Spinner";

export default function Loading() {
    return (
        <div className="h-full w-full flex items-center justify-center">
            <Spinner size="md" />
        </div>
    )
}