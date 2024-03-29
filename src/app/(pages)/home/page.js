import React from "react";
import HomeList from "../../components/home-list";

async function getCourses() {
  const response = await fetch(`${process.env.APP_BASE_URL}/api/courses`)
  if (!response.ok) {
    return new Error("failed to load courses")
  }
  return response.json()
}

export default async function HomePage() {
  const courses = await getCourses();
  return <HomeList data={courses} />
}