import React from "react";
import ClassroomsList from "../../components/classroom-list";

async function getClassrooms() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/classrooms`)
  if (!response.ok) {
    return new Error("failed to load classrooms")
  }
  return response.json()
}

export default async function ClassroomsPage() {
  const classrooms = await getClassrooms();
  return <ClassroomsList data={classrooms} />
}