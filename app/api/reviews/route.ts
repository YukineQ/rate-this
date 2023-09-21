import serverAuth from "@/lib/serverAuth"
import { NextResponse } from "next/server"

export async function POST(
    request: Request,
) {
    try {
        const { currentUser } = await serverAuth()
        const body = await request.json()
        console.log(body)

        if (!currentUser) {
            return new NextResponse('Unauthorized', { status: 401 })
        }

    } catch (error) {
        console.log('[REVIEWS:POST]', error)
        return new NextResponse('Internal Error', { status: 500 })
    }
}