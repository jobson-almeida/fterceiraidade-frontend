import React from "react";
import AssessmentsList from "./_components/assessments-list";

async function getAssessments() {
  const response = await fetch('http://localhost:3000/api/assessments', {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    },
    cache: "no-cache"
  })
  return response.json()
}

export default async function AssessmentsPage() {
  const assessments = await getAssessments();

  return (
    <div>
      <AssessmentsList data={assessments} />
    </div>
  );
}