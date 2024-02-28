import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";



const API_URL_BASE = process.env.API_URL_BASE;
export async function GET(request, { params }) {
    const id = params.id
    const response = await fetch(`${API_URL_BASE}/questions/${id}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    })
    const data = await response.json()
    revalidateTag("questions")
    return NextResponse.json({ questions: [data] })
}

export async function DELETE({ params }) {
    const id = params.id
    await fetch(`${API_URL_BASE}/questions/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    })
    revalidatePath("/questions")
    return new Response(null, { status: 204 })
}