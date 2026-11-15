import React from "react";
import TeachersList from "../../components/teachers-list"
import { safeJsonFetch } from "../../utils/safe-json-fetch";

async function getTeachers() {
    return safeJsonFetch(`${process.env.API_BASE_URL}/teachers`, []);
}

export default async function TeachersPage() {
    const teachers = await getTeachers()
    return <TeachersList data={teachers} />
}