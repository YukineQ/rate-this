import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prismadb from "@/lib/prismadb";

export async function POST(
    request: Request
) {
    const body = await request.json()
    const {
        email,
        name,
        password
    } = body

    const isEmailTaken = !!await prismadb.user.findUnique({
        where: {
            email: email
        }
    })

    if (isEmailTaken) {
        return new NextResponse("Email alredy taken.", { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await prismadb.user.create({
        data: {
            email,
            name,
            hashedPassword,
        }
    })

    return NextResponse.json(user)
}