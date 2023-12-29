import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const id = params.id
    const response = await fetch(`http://localhost:8000/questions/${id}`, {
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
    await fetch(`http://localhost:8000/questions/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    })
    revalidatePath("/questions")
    return new Response(null, { status: 204 })
}