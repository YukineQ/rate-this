import prismadb from "@/lib/prismadb"
import { NextResponse } from "next/server"

export async function GET(
    request: Request
) {
    try {
        const categories = await prismadb.category.findMany()

        return NextResponse.json(categories)
    } catch (error) {
        return new NextResponse("Something went wrong.", { status: 400 })
    }
}