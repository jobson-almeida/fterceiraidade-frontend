import React from "react";
import ClassroomsList from "../../components/classroom-list";

async function getClassrooms() {
<<<<<<< HEAD
  const response = await fetch("http://localhost:3000/api/classrooms")
=======
  const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/classrooms`)
>>>>>>> cf3f9e87f17fc78a27318538d0737bead45e5df8
  if (!response.ok) {
    return new Error("failed to load classrooms")
  }
  return response.json()
}

export default async function ClassroomsPage() {
  const classrooms = await getClassrooms();
  return <ClassroomsList data={classrooms} />
}