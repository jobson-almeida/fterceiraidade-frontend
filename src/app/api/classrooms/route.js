import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(request) {
    //  const course = await request.nextUrl.searchParams.get('course') 
    //const url = course !== null ? `http://localhost:8000/classrooms?course=${course}` : "http://localhost:8000/classrooms"
    const url = "http://localhost:8000/classrooms"

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        },
    })
    const data = await response.json()
    revalidatePath("/classrooms")
    return NextResponse.json(data)
}

export async function POST(request) {
    const { name, description } = await request.json()
    const response = await fetch("http://localhost:8000/classrooms", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ name, description })
    })
    const data = await response.json()
    revalidatePath("/classrooms")
    return NextResponse.json(data)
}
