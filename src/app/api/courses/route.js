import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";



const API_URL_BASE = process.env.API_URL_BASE;
export async function GET() {
    const response = await fetch(`${API_URL_BASE}/courses`, {
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
    const response = await fetch(`${API_URL_BASE}/courses`, {
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
