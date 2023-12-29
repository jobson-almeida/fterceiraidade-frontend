import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const id = params.id
    const response = await fetch(`http://localhost:8000/classrooms/${id}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    })
    const data = await response.json()
    revalidateTag("classrooms")
    return NextResponse.json(data)
}

export async function DELETE(request) {
    const id = request.params.id
    await fetch(`http://localhost:8000/classrooms/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    })
    revalidatePath("/classrooms")
    return new Response(null, { status: 204 })
}