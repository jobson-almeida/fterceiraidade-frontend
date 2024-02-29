import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
    const response = await fetch(`${process.env.API_BASE_URL}/assessments`, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        },
    })
    const data = await response.json()
    revalidateTag("assessments")
    return NextResponse.json(data)
}

export async function POST(request) {
    const { avatar, firstname, lastname, email, phone, address } = await request.json()
    const response = await fetch(`${process.env.API_BASE_URL}/assessments`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ avatar, firstname, lastname, email, phone, address })
    })
    const data = await response.json()
    revalidatePath("/assessments")
    return NextResponse.json(data)
}
