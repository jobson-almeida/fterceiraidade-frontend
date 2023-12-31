export async function getQuestion(id) {
  const response = await fetch(`http://localhost:3000/api/questions/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    },
    cache: "no-cache"
  })
  const data = await response.json()
  return data
}