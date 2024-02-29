import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const id = params.id
    const response = await fetch(`${process.env.API_BASE_URL}/assessments?id=${id}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    })
    const data = await response.json()
    revalidateTag("assessments")
    return NextResponse.json(data)
}

export async function DELETE(request) {
    const id = request.params.id
    await fetch(`${process.env.API_BASE_URL}/assessments/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    })
    revalidatePath("/assessments")
    return new Response(null, { status: 204 })
}