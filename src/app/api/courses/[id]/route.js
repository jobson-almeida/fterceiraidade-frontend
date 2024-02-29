import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const id = params.id
    const response = await fetch(`${process.env.API_BASE_URL}/courses/${id}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    })
    const data = await response.json()
    revalidateTag("courses")
    return NextResponse.json(data)
}

export async function DELETE(request, { params }) {
    const id = params.id
    await fetch(`${process.env.API_BASE_URL}/courses/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    })
    revalidatePath("/courses")
    return new Response(null, { status: 204 })
}