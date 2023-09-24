import prismadb from "@/lib/prismadb"
import serverAuth from "@/lib/serverAuth"
import { NextResponse } from "next/server"

export async function POST(
    request: Request,
) {
    try {
        const { currentUser } = await serverAuth()

        if (!currentUser) {
            return new NextResponse('Unauthorized', { status: 401 })
        }

        const body = await request.json()
        const { title, creation, content, rate, category, tags, images } = body

        if (!title || !creation || !content || !rate || !category) {
            return new NextResponse("Missing required fields", { status: 403 });
        }

        let newTags = [];
        if (tags) {
            const tagsArrFromJson = JSON.parse(tags)
            const tagsValue = tagsArrFromJson.map((tag: { value: string }) => tag.value)

            newTags = await Promise.all(tagsValue.map((tag: string) => {
                return prismadb.tag.upsert({
                    create: { name: tag },
                    update: {},
                    where: { name: tag }
                })
            }))
        }

        const review = await prismadb.review.create({
            data: {
                title: title,
                creation: creation,
                content: content,
                rate: rate,
                categoryId: category,
                userId: currentUser.id,
                tags: {
                    create: newTags.map(tag => ({ tagId: tag.id }))
                },
                images: {
                    create: images
                }
            }
        })

        return NextResponse.json(review)
    } catch (error) {
        console.log('[REVIEWS:POST]', error)
        return new NextResponse('Internal Error', { status: 500 })
    }
}

export async function GET(
    request: Request,
    userId: string,
) {
    try {
        const reviews = await prismadb.review.findMany({
            include: { category: true },
            where: { userId: userId }
        })

        return NextResponse.json(reviews)
    } catch (error) {
        console.log('[REVIEWS:GET]', error)
        return new NextResponse('Internal Error', { status: 500 })
    }
}