export async function safeJsonFetch(url, fallback = []) {
    try {
        const response = await fetch(url, {
            cache: "no-store",
            headers: {
                "Content-type": "application/json",
            },
        });

        if (!response.ok) {
            return fallback;
        }

        const data = await response.json();
        return Array.isArray(data) ? data : fallback;
    } catch {
        return fallback;
    }
}
