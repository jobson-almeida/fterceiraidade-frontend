import React from "react";
import AssessmentsList from "../../components/assessments-list";

async function getAssessments() {
<<<<<<< HEAD
  const response = await fetch("http://localhost:3000/api/assessments")
=======
  const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/assessments`)
>>>>>>> cf3f9e87f17fc78a27318538d0737bead45e5df8
  if (!response.ok) {
    return new Error("failed to load assessments")
  }
  return response.json()
}

export default async function AssessmentsPage() {
  const assessments = await getAssessments();
  return <AssessmentsList data={assessments} />
}