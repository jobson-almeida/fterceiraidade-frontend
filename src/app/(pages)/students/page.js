import React from "react";
import StudentsList from "../../components/students-list"

async function getStudents() {
    const response = await fetch(`${process.env.APP_BASE_URL}/api/students`)
    if (!response.ok) {
        return new Error("failed to load students")
    }
    return response.json()
}

export default async function StudentsPage() {
    const students = await getStudents()
    return <StudentsList data={students} />
}