import React from "react";
import AssessmentsList from "../../components/assessments-list";

async function getAssessments() {
  const response = await fetch('http://localhost:3000/api/assessments')
  return response.json()
}

export default async function AssessmentsPage() {
  const assessments = await getAssessments();
  return <AssessmentsList data={assessments} />
}