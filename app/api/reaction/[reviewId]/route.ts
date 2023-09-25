import { NextResponse } from "next/server"

import serverAuth from "@/lib/serverAuth";
import prismadb from "@/lib/prismadb";

export async function GET(
    request: Request,
    { params }: { params: { reviewId: string } }
) {
    try {
        const { currentUser } = await serverAuth()

        let hasLike = false

        if (currentUser) {
            hasLike = !!await prismadb.reaction.findUnique({
                where: {
                    userId_reviewId: {
                        userId: currentUser.id,
                        reviewId: params.reviewId
                    }
                }
            })
        }
        const reactionCount = await prismadb.reaction.count({
            where: {
                reviewId: params.reviewId
            }
        })
        return NextResponse.json({ count: reactionCount, hasLike: hasLike })
    } catch (error) {
        console.log('[REACTION:GET]', error)
        return new NextResponse('Internal Error', { status: 500 })
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: { reviewId: string } }
) {
    try {
        const { currentUser } = await serverAuth()

        if (!currentUser) {
            return new NextResponse('Unathorized', { status: 401 })
        }

        const reaction = await prismadb.reaction.delete({
            where: {
                userId_reviewId: {
                    reviewId: params.reviewId,
                    userId: currentUser.id
                }
            }
        })

        return NextResponse.json(reaction)
    } catch (error) {
        console.log('[REACTION:DELETE]', error)
        return new NextResponse('Internal Error', { status: 500 })
    }
}