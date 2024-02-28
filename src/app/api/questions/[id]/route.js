import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const id = params.id
    const response = await fetch(`${process.env.API_BASE_URL}/questions/${id}`, {
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
    await fetch(`${process.env.API_BASE_URL}/questions/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    })
    revalidatePath("/questions")
    return new Response(null, { status: 204 })
}