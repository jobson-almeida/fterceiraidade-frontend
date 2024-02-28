import React from "react";
import CoursesList from "../../components/course-list";

async function getCourses() {
  const response = await fetch(`${process.env.APP_PUBLIC_URL}/api/courses`)
  if (!response.ok) {
    //return new Error("failed to load courses")
    return []
  }
  return response.json()
}

export default async function CoursesPage() {
  const courses = await getCourses();
  return <CoursesList data={courses} />
}