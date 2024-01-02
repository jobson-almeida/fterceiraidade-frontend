import Question from "@/app/components/question"

export default function Page({ params }) {
  return <Question id={params.id} />
} 