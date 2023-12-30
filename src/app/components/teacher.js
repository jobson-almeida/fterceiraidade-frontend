async function getTeacher(id) {
  const response = await fetch(`http://localhost:3000/api/teachers/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    },
    cache: "no-cache"
  })
  return response.json()
}

export const preload = (id) => {
  void getTeacher(id)
}

export default async function Teacher({ id }) {
  const result = await getTeacher(id)
  return (
    <>
      <ul>
        <li>{result.avatar}</li>
        <li>{result.firstname}</li>
        <li>{result.lastname}</li>
        <li>{result.email}</li>
        <li>{result.phone}</li>
        <li>{result.address.city}</li>
        <li>{result.address.state}</li>
        <li>{result.address.street}</li>
      </ul>
    </>
  )
}