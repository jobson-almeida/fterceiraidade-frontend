import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

const API_URL_BASE = process.env.API_URL_BASE;

export async function GET() {
    const response = await fetch(`${API_URL_BASE}/questions`, {
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
    const response = await fetch(`${API_URL_BASE}/questions`, {
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
