export async function getChartData() {
    const response = await fetch(`${process.env.API_BASE_URL}/chart_data`, {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error(`Failed to load chart data: ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
        throw new Error("Invalid chart data response");
    }

    return data;
}
