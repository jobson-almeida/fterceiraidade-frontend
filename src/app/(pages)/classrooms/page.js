import React from "react";
import ClassroomsList from "../../components/classroom-list";
import { safeJsonFetch } from "../../utils/safe-json-fetch";

async function getClassrooms() {
  return safeJsonFetch(`${process.env.APP_BASE_URL}/api/classrooms`, []);
}

export default async function ClassroomsPage() {
  const classrooms = await getClassrooms();
  return <ClassroomsList data={classrooms} />
}