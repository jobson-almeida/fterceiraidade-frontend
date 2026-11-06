import React from "react";
import TeachersList from "../../components/teachers-list"
import { safeJsonFetch } from "../../utils/safe-json-fetch";

async function getTeachers() {
    return safeJsonFetch(`${process.env.APP_BASE_URL}/api/teachers`, []);
}

export default async function TeachersPage() {
    const teachers = await getTeachers()
    return <TeachersList data={teachers} />
}