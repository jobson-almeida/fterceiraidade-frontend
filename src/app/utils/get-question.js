export async function getQuestion(id) {
  const response = await fetch(`${process.env.API_BASE_URL}/questions/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    },
    cache: "no-store"
  })
  if (!response.ok) {
    throw new Error(`Failed to load question: ${response.status}`)
  }

  const question = await response.json()
  return { questions: [question] }
}