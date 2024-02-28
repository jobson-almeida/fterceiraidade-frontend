import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
    const response = await fetch(`${process.env.API_BASE_URL}/courses`, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        },
    })
    const data = await response.json()
    revalidateTag("courses")
    return NextResponse.json(data)
}

export async function POST(request) {
    const { name, description } = await request.json()
    const response = await fetch(`${process.env.API_BASE_URL}/courses`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ name, description })
    })
    const data = await response.json()
    revalidatePath("/courses")
    return NextResponse.json(data)
}
