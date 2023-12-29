import QuestionOne from "@/app/components/question-one"

async function getQuestion(id) {
  const response = await fetch(`http://localhost:3000/api/questions/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    },
    cache: "no-cache"
  })
  return response.json()
}

export default async function Page({ params }) {
  const question = await getQuestion(params.id)

  return (
    <div>
      <QuestionOne data={question} />
    </div>
  )
} 