"use server"
const ALLOWED_CHART_SOURCES = new Set([
    "chart_data",
    "overview",
    "sales",
    "users",
]);

export async function ActionChart(source) {
    const normalizedSource = typeof source === "string" ? source.trim() : "";

    if (!ALLOWED_CHART_SOURCES.has(normalizedSource)) {
        throw new Error("Invalid chart source");
    }

    const baseUrl = process.env.APP_BASE_URL || "http://localhost:3000";
    const url = new URL(`/api/${normalizedSource}`, baseUrl);
    const response = await fetch(url.toString(), {
        method: "GET",
        headers: {
            "Content-type": "application/json",
        },
        cache: "no-cache"
    });

    if (!response.ok) {
        throw new Error(`Failed to load chart data: ${response.status}`);
    }

    return response.json();
}