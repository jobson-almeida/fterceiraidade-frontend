"use server"
import { revalidatePath, revalidateTag } from "next/cache"

export async function ActionChart(source) {
    const response = await fetch(`http://localhost:3000/api/${source}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "User-Agent":
                "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
            Accept: "application/json; charset=UTF-8",
        },
        cache: "no-cache"
    })
    //const values = await response.json()
    const values = response

    if (!values.ok) {
        console.log(new Error('Failed to fetch data'))
    }

    return await values.json()

    //revalidateTag("/")
    //revalidatePath("/") 
    //return values
}