import React from "react";
import QuestionsList from "../../components/questions-list";

async function getQuestions() {
<<<<<<< HEAD
  const response = await fetch("http://localhost:3000/api/questions")
=======
  const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/questions`)
>>>>>>> cf3f9e87f17fc78a27318538d0737bead45e5df8
  if (!response.ok) {
    return new Error("failed to load questions")
  }
  return response.json()
}

export default async function QuestionPage() {
  const questions = await getQuestions()
  return <QuestionsList data={questions} />
}