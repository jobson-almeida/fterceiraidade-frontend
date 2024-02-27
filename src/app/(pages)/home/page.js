import React from "react";
import HomeList from "../../components/home-list";

async function getCourses() {
<<<<<<< HEAD
  const response = await fetch("http://localhost:3000/api/courses")
=======
  const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/courses`)
>>>>>>> cf3f9e87f17fc78a27318538d0737bead45e5df8
  if (!response.ok) {
    return new Error("failed to load courses")
  }
  return response.json()
}

export default async function HomePage() {
  const courses = await getCourses();
  return <HomeList data={courses} />
}