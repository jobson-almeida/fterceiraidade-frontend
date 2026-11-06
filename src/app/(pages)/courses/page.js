import React from "react";
import CoursesList from "../../components/course-list";
import { safeJsonFetch } from "../../utils/safe-json-fetch";

async function getCourses() {
  return safeJsonFetch(`${process.env.APP_BASE_URL}/api/courses`, []);
}

export default async function CoursesPage() {
  const courses = await getCourses();
  return <CoursesList data={courses} />
}