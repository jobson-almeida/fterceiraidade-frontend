"use server"
export async function ActionChart(source) {
    const PORT = process.env.PORT || 3000;
    const response = await fetch(`http://localhost:${PORT}/api/${source}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
        },
        cache: "no-cache"
    })
    return await response.json()
    //revalidateTag("/")
    //revalidatePath("/") 
}