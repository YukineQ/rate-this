import CommentsList from "./comments-list";
import { CreateComment } from "./create-comment";

type CommentsProps = {
    reviewId: string;
}

export const Comments = ({ reviewId }: CommentsProps) => {
    return (
        <div>
            <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                Discussion
            </h3>
            <CreateComment reviewId={reviewId} />
            <CommentsList reviewId={reviewId} />
        </div>
    )
}