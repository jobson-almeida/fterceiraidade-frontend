import React from "react";
import QuestionsList from "../../components/questions-list";
import { safeJsonFetch } from "../../utils/safe-json-fetch";

async function getQuestions() {
  return safeJsonFetch(`${process.env.APP_BASE_URL}/api/questions`, []);
}

export default async function QuestionPage() {
  const questions = await getQuestions()
  return <QuestionsList data={questions} />
}