import React from "react";
import CoursesList from "../../components/course-list";

async function getCourses() {
  const PORT = process.env.PORT || 3000;
  const response = await fetch(`http://localhost:${PORT}/api/courses`)

  if (!response.ok) {
    return new Error("failed to load courses")
  }
  return response.json()
}

export default async function CoursesPage() {
  const courses = await getCourses();
  return <CoursesList data={courses} />
}