import React from "react";
import StudentsList from "../../components/students-list"
import { safeJsonFetch } from "../../utils/safe-json-fetch";

async function getStudents() {
    return safeJsonFetch(`${process.env.APP_BASE_URL}/api/students`, []);
}

export default async function StudentsPage() {
    const students = await getStudents()
    return <StudentsList data={students} />
}