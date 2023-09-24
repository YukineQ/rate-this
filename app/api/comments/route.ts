import prismadb from "@/lib/prismadb"
import serverAuth from "@/lib/serverAuth"
import { NextResponse } from "next/server"

export async function POST(
    request: Request,
) {
    try {
        const { currentUser } = await serverAuth()

        if (!currentUser) {
            return new NextResponse('Unathorized', { status: 401 })
        }

        const body = await request.json()
        const { text, reviewId } = body

        if (!text || !reviewId) {
            return new NextResponse("Missing required fields", { status: 403 });
        }

        const newComment = await prismadb.comment.create({
            data: {
                text,
                reviewId,
                userId: currentUser.id
            }
        })

        return NextResponse.json(newComment)
    } catch (error) {
        console.log('[COMMENTS:POST]', error)
        return new NextResponse('Iternal error', { status: 500 })
    }
}