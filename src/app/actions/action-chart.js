"use server"
export async function ActionChart(source) {
    const response = await fetch(`${process.env.APP_PUBLIC_URL}/api/${source}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
        },
        cache: "no-cache"
    })
    const values = await response.json()

    //revalidateTag("/")
    //revalidatePath("/") 
    return values
}