import { User, Comment } from '@prisma/client'

export type CommentsResponse = {
    user: User,
} & Comment
