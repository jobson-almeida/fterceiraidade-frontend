import React from "react";
import CoursesList from "../../components/course-list";
import { safeJsonFetch } from "../../utils/safe-json-fetch";

async function getCourses() {
  return safeJsonFetch(`${process.env.API_BASE_URL}/courses`, []);
}

export default async function CoursesPage() {
  const courses = await getCourses();
  return <CoursesList data={courses} />
}