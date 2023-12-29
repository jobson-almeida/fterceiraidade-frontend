import React from "react";
import QuestionsList from "./_components/questions-list";

async function getQuestions() {
  const response = await fetch('http://localhost:3000/api/questions', {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    },
    cache: "no-cache"
  })
  return response.json()
}

export default async function QuestionPage() {
  const questions = await getQuestions()

  return (
    <div>
      <QuestionsList data={questions} />
    </div>
  );
}