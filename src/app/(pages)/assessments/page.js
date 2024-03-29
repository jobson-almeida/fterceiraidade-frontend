import React from "react";
import AssessmentsList from "../../components/assessments-list";

async function getAssessments() {
  const response = await fetch(`${process.env.APP_BASE_URL}/api/assessments`)
  if (!response.ok) {
    return new Error("failed to load assessments")
  }
  return response.json()
}

export default async function AssessmentsPage() {
  const assessments = await getAssessments();
  return <AssessmentsList data={assessments} />
}