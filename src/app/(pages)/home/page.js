import React from "react";
import HomeList from "../../components/home-list";

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

export default async function HomePage() {
  const courses = await getCourses();
  return <HomeList data={courses} />
}