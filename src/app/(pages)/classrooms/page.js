import React from "react";
import ClassroomsList from "../../components/classroom-list";
import { safeJsonFetch } from "../../utils/safe-json-fetch";

async function getClassrooms() {
  return safeJsonFetch(`${process.env.API_BASE_URL}/classrooms`, []);
}

export default async function ClassroomsPage() {
  const classrooms = await getClassrooms();
  return <ClassroomsList data={classrooms} />
}