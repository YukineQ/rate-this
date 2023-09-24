import prismadb from "@/lib/prismadb"
import { NextResponse } from "next/server"

export async function GET(
    request: Request,
    { params }: { params: { reviewId: string } }
) {
    try {
        const { reviewId } = params

        const comments = await prismadb.comment.findMany({
            where: {
                reviewId: reviewId,
            },
            include: {
                user: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        })

        return NextResponse.json(comments)
    } catch (error) {
        console.log('[COMMENTS:POST]', error)
        return new NextResponse('Iternal error', { status: 500 })
    }
}