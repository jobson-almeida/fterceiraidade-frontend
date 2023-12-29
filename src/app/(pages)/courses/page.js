import React from "react";
import CoursesList from "./_components/course-list";

async function getCourses() {
  const response = await fetch('http://localhost:3000/api/courses', {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    },
    cache: "no-cache"
  })
  return response.json()
}

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <div>
      <CoursesList data={courses} />
    </div>
  );
}