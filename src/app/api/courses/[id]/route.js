import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"

const API_URL_BASE = process.env.API_URL_BASE;
export async function GET(request, { params }) {
    const id = params.id
    const response = await fetch(`${API_URL_BASE}/courses/${id}`, {
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
    await fetch(`${API_URL_BASE}/courses/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    })
    revalidatePath("/courses")
    return new Response(null, { status: 204 })
}