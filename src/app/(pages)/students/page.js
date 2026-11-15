import React from "react";
import StudentsList from "../../components/students-list"
import { safeJsonFetch } from "../../utils/safe-json-fetch";

async function getStudents() {
    return safeJsonFetch(`${process.env.API_BASE_URL}/students`, []);
}

export default async function StudentsPage() {
    const students = await getStudents()
    return <StudentsList data={students} />
}