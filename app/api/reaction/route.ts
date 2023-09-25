import { NextResponse } from "next/server"

import serverAuth from "@/lib/serverAuth"
import prismadb from "@/lib/prismadb"

export async function POST(
    request: Request,
) {
    try {
        const { currentUser } = await serverAuth()

        const body = await request.json()

        if (!currentUser) {
            return new NextResponse('Unathorized', { status: 401 })
        }

        const reaction = await prismadb.reaction.create({
            data: {
                reviewId: body.reviewId,
                userId: currentUser.id
            }
        })

        return NextResponse.json(reaction)
    } catch (error) {
        console.log('[REACTION:POST]', error)
        return new NextResponse('Internal Error', { status: 500 })
    }
}