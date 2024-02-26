const PORT = process.env.PORT || 3000;

export async function getQuestion(id) {
  const response = await fetch(`http://localhost:${PORT}/api/questions/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    },
    cache: "no-cache"
  })
  const data = await response.json()
  return data
}