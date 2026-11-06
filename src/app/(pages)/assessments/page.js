import React from "react";
import AssessmentsList from "../../components/assessments-list";
import { safeJsonFetch } from "../../utils/safe-json-fetch";

async function getAssessments() {
  return safeJsonFetch(`${process.env.APP_BASE_URL}/api/assessments`, []);
}

export default async function AssessmentsPage() {
  const assessments = await getAssessments();
  return <AssessmentsList data={assessments} />
}