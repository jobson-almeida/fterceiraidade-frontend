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

export default async function Page({ params }) {
  const teacher = await getTeacher(params.id)
  return (
    <ul>
      <li>{teacher.avatar}</li>
      <li>{teacher.firstname}</li>
      <li>{teacher.lastname}</li>
      <li>{teacher.email}</li>
      <li>{teacher.phone}</li>
      <li>{teacher.address.city}</li>
      <li>{teacher.address.state}</li>
      <li>{teacher.address.street}</li>
    </ul>)
}  