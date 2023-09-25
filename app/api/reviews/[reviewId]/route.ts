import prismadb from "@/lib/prismadb"
import { NextResponse } from "next/server"

export async function GET(
    request: Request,
    { params }: { params: { reviewId: string } }
) {
    try {
        const { reviewId } = params

        const review = await prismadb.review.findFirst({
            where: { id: reviewId },
            include: {
                images: true,
                tags: { include: { tag: true } },
                category: true,
                user: { select: { email: true } }
            }
        })
        console.log(review)
        return NextResponse.json(review)
    } catch (error) {
        console.log('[REVIEWS:REVIEW_ID:GET]', error)
        return new NextResponse('Internal Error', { status: 500 })
    }
}