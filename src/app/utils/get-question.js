export async function getQuestion(id) {
  const response = await fetch(`${process.env.APP_PUBLIC_URL}/api/questions/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    },
    cache: "no-cache"
  })
  const data = await response.json()
  return data
}