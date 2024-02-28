import React from "react";
import QuestionsList from "../../components/questions-list";

async function getQuestions() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/questions`)
  if (!response.ok) {
    //return new Error("failed to load questions")
    return []
  }
  return response.json()
}

export default async function QuestionPage() {
  const questions = await getQuestions()
  return <QuestionsList data={questions} />
}