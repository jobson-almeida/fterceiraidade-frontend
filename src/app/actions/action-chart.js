"use server"
const ALLOWED_CHART_SOURCES = new Set([
    "overview",
    "sales",
    "users",
]);

export async function ActionChart(source) {
    if (!ALLOWED_CHART_SOURCES.has(source)) {
        throw new Error("Invalid chart source");
    }

    const url = new URL(`/api/${source}`, process.env.APP_BASE_URL);
    const response = await fetch(url.toString(), {
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