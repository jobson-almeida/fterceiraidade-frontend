"use server"
import { revalidatePath, revalidateTag } from "next/cache"

export async function ActionChart(source) {
    const response = await fetch(`http://localhost:3000/api/${source}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        },
        cache: "no-cache"
    })
    const values = await response.json()

    //revalidateTag("/")
    //revalidatePath("/")

    return values
}