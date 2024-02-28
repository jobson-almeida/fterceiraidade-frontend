import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
    //const response = await fetch("http://localhost:8000/students?categoryId_ne=0&_expand=category&_sort=id&_order=desc", {
    const response = await fetch(`${process.env.API_BASE_URL}/students`, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        },
        //cache: "no-cache" //ok
    })
    const data = await response.json()
    revalidateTag("students")
    return NextResponse.json(data)
}

export async function POST(request) {
    const { avatar, firstname, lastname, email, phone, address } = await request.json()
    const response = await fetch(`${process.env.API_BASE_URL}/students`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ avatar, firstname, lastname, email, phone, address })
    })
    const data = await response.json()
    revalidatePath("/students")
    return NextResponse.json(data)
}
