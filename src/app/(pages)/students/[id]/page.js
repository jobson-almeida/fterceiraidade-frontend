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

export default async function Page({ params }) {
  const student = await getStudent(params.id)
  return (
    <ul>
      <li>{student.avatar}</li>
      <li>{student.firstname}</li>
      <li>{student.lastname}</li>
      <li>{student.email}</li>
      <li>{student.phone}</li>
      <li>{student.address.city}</li>
      <li>{student.address.state}</li>
      <li>{student.address.street}</li>
    </ul>)
}