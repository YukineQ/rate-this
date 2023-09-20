import { NextResponse } from "next/server";
import serverAuth from "@/lib/serverAuth";
import prismadb from "@/lib/prismadb";


export async function GET(
    request: Request
) {
    try {
        const { currentUser } = await serverAuth()

        return NextResponse.json(currentUser)
    } catch (error) {
        return new NextResponse("Something went wrong.", { status: 400 })
    }
}

export async function PATCH(
    request: Request
) {
    try {
        const { currentUser } = await serverAuth()

        const body = await request.json()

        const { name, email, bio } = body

        if (!name) {
            return new NextResponse("Name is required.", { status: 400 })
        }

        if (!email) {
            return new NextResponse("Emailis required.", { status: 400 })
        }
        //TODO: email

        const user = await prismadb.user.update({
            where: {
                id: currentUser.id
            },
            data: {
                name,
                bio
            }
        })

        return NextResponse.json(user)
    } catch (error) {
        console.log('[USERS_ME_PATCH]:', error)
        return new NextResponse("Internal error", { status: 500 })
    }
}