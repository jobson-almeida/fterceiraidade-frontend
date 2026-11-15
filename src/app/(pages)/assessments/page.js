import React from "react";
import AssessmentsList from "../../components/assessments-list";
import { safeJsonFetch } from "../../utils/safe-json-fetch";

async function getAssessments() {
  return safeJsonFetch(`${process.env.API_BASE_URL}/assessments`, []);
}

export default async function AssessmentsPage() {
  const assessments = await getAssessments();
  return <AssessmentsList data={assessments} />
}