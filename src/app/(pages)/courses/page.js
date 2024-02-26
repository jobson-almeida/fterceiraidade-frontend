import React from "react";
import CoursesList from "../../components/course-list";

async function getCourses() {
  const response = await fetch('http://localhost:3000/api/courses')
  return response.json()
}

export default async function CoursesPage() {
  const courses = await getCourses();
  return <CoursesList data={courses} />
}