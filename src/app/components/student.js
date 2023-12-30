async function getStudent(id) {
  const response = await fetch(`http://localhost:3000/api/students/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    },
    cache: "no-cache"
  })
  return response.json()
}

export const preload = (id) => {
  void getStudent(id)
}

export default async function Student({ id }) {
  const result = await getStudent(id)

  if (result === null || result === undefined || result.address === undefined) {
    throw new Error('Falhou')
  }

  return (
    <ul>
      <li>{result.avatar}</li>
      <li>{result.firstname}</li>
      <li>{result.lastname}</li>
      <li>{result.email}</li>
      <li>{result.phone}</li>
      <li>{result.address?.city}</li>
      <li>{result.address?.state}</li>
      <li>{result.address?.street}</li>
    </ul>
  )
}