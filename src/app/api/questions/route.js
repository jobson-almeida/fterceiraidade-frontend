import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
    const response = await fetch("http://localhost:8000/questions", {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        },
    })
    const data = await response.json()
    revalidateTag("questions")
    return NextResponse.json(data)
}

export async function POST(request) {
    const { questioning, type, alternatives, answer, discipline } = await request.json()
    const response = await fetch("http://localhost:8000/questions", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ questioning, type, alternatives, answer, discipline })
    })
    const data = await response.json()
    revalidatePath("/questions")
    return NextResponse.json(data)
}
