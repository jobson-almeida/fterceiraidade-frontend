import React from "react";
import ClassroomsList from "../../components/classroom-list";

async function getClassrooms() {
  const response = await fetch('http://localhost:3000/api/classrooms')
  return response.json()
}

export default async function ClassroomsPage() {
  const classrooms = await getClassrooms();
  return <ClassroomsList data={classrooms} />
}