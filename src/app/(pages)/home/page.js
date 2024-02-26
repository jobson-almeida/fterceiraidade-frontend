import React from "react";
import HomeList from "../../components/home-list";

async function getCourses() {
  const PORT = process.env.PORT || 3000;
  const response = await fetch(`http://localhost:${PORT}/api/courses`)

  if (!response.ok) {
    return new Error("failed to load courses")
  }
  return response.json()
}

export default async function HomePage() {
  const courses = await getCourses();
  return <HomeList data={courses} />
}