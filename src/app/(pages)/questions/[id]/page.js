import Question from "@/app/components/question"
import { getQuestion } from "@/app/utils/get-question"

export default async function Page({ params }) {
  const { id } = await params
  const initialValues = await getQuestion(id)
  return <Question initialValues={initialValues} />
}