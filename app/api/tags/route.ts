import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
    request: Request
) {
    try {
        const tags = await prismadb.tag.findMany()

        return NextResponse.json(tags)
    } catch (error) {
        console.log('[USERS_ME_PATCH]:', error)
        return new NextResponse("Internal error", { status: 500 })
    }
}