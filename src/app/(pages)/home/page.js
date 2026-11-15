import React from "react";
import HomeList from "../../components/home-list";
import { safeJsonFetch } from "../../utils/safe-json-fetch";

async function getCourses() {
  return safeJsonFetch(`${process.env.API_BASE_URL}/courses`, []);
}

export default async function HomePage() {
  const courses = await getCourses();
  return <HomeList data={courses} />
}