import React from "react";
import HomeList from "../../components/home-list";
import { safeJsonFetch } from "../../utils/safe-json-fetch";

async function getCourses() {
  return safeJsonFetch(`${process.env.APP_BASE_URL}/api/courses`, []);
}

export default async function HomePage() {
  const courses = await getCourses();
  return <HomeList data={courses} />
}