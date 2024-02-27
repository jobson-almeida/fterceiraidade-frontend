export async function getQuestion(id) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/questions/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    },
    cache: "no-cache"
  })
  const data = await response.json()
  return data
}