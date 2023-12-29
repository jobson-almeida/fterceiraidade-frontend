import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
    const response = await fetch("http://localhost:8000/courses", {
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
    const response = await fetch("http://localhost:8000/courses", {
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
