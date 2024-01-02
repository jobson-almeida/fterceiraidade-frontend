import Question, { preload } from "@/app/components/question"


/*
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
*/
export default function Page({ params }) {
  // const question = await getQuestion(params.id)
  //return <QuestionOne data={question} />
  //preload(params.id)
  return <Question id={params.id} />
} 