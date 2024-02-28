import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";



const API_URL_BASE = process.env.API_URL_BASE;
export async function GET() {
    const response = await fetch(`${API_URL_BASE}/teachers`, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        },
    })
    const data = await response.json()
    revalidateTag("teachers")
    return NextResponse.json(data)
}

export async function POST(request) {
    const { avatar, firstname, lastname, email, phone, address } = await request.json()
    const response = await fetch(`${API_URL_BASE}/teachers`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ avatar, firstname, lastname, email, phone, address })
    })
    const data = await response.json()
    revalidatePath("/teachers")
    return NextResponse.json(data)
}
