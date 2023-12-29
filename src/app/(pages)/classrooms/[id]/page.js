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

export default async function Page({ params }) {
  const classroom = await getClassroom(params.id)
  return (
    <ul>
      <li>{classroom.name}</li>
      <li>{classroom.description}</li>
      <li>{classroom.course}</li>
    </ul>)
}