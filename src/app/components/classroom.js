async function getClassroom(id) {
  const response = await fetch(`http://localhost:3000/api/classrooms/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    },
    cache: "no-cache"
  })
  return response.json()
}

export const preload = (id) => {
  void getClassroom(id)
}

export default async function Classroom({ id }) {
  const result = await getClassroom(id)

  if (!result || result.name === undefined) {
    throw new Error('Falhou')
  }

  return (
    <ul>
      <li>{result.name}</li>
      <li>{result.description}</li>
      <li>{result.course}</li>
    </ul>
  )
}