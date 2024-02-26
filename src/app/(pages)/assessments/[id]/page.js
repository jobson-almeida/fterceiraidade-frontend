import Link from "next/link"
import CoursesClassroomsListEdit from "../../../components/courses-classrooms-list-edit"
import QuestionsListEdit from "../../../components/questions-list-edit"

const PORT = process.env.PORT || 3000;

async function getAssessment(id) {
  const response = await fetch(`http://localhost:${PORT}/api/assessments/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    },
    cache: "no-cache"
  })
  return response.json()
}

async function getCourses() {
  const response = await fetch(`http://localhost:${PORT}/api/courses`, {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    },
    cache: "no-cache"
  })
  return response.json()
}

async function getClassrooms() {
  const response = await fetch(`http://localhost:${PORT}/api/classrooms`, {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    },
    cache: "no-cache"
  })
  return response.json()
}

async function getQuestions() {
  const response = await fetch(`http://localhost:${PORT}/api/questions`, {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    },
    cache: "no-cache"
  })
  return response.json()
}

export const preload = (id) => {
  void getAssessment(id)
}

export default async function Page({ params }) {
  const assessmentData = getAssessment(params.id)
  const coursesData = getCourses()
  const classroomsData = getClassrooms()
  const questionsData = getQuestions()

  const [[assessment], courses, classrooms, questions] = await Promise.all([assessmentData, coursesData, classroomsData, questionsData])

  if (!assessment || !courses || !classrooms || !questions) {
    throw new Error('Falhou')
  }

  return (
    <>
      <div className="flex flex-wrap flex-col mr-14">
        <section id="assessment">

          <div className="flex flex-row w-full max-w-[1024px] justify-center mt-4 font-bold">Descrição</div>
          <textarea className="flex w-full max-w-[1024px] bg-white border border-slate-300 rounded-md py-2 px-3
                  shadow-sm focus:outline-none focus:border-palette-500 focus:ring-palette-500 focus:ring-1 text-sm mt-2"
            defaultValue={assessment.description}
            multiline="true"
            rows={3}
          />

          <div className="inline-flex my-2 gap-2">
            <label htmlFor="start_date" className="py-2 ml-4">início</label>
            <input id="start_date" type="text" className="bg-white flex w-full max-w-[128px] border border-slate-300 rounded-md py-2 px-3
                shadow-sm focus:outline-none focus:border-palette-500 focus:ring-palette-500 focus:ring-1 text-sm text-center"
              defaultValue={assessment.start_date}
            />
            <label htmlFor="end_date" className="py-2 ml-4">término</label>
            <input id="end_date" type="text" className="bg-white flex w-full max-w-[128px] border border-slate-300 rounded-md py-2 px-3
                shadow-sm focus:outline-none focus:border-palette-500 focus:ring-palette-500 focus:ring-1 text-sm text-center"
              defaultValue={assessment.end_date}
            />
          </div>
          {/* 
          <div className="backdrop:blur-sm bg-[rgba(255,255,255,0.7)] w-full max-w-[1024px] mt-6 mb-4">
            <div className="flex items-center flex-row justify-between border-spacing-2 min-h-[48px] px-2">
              <div className="flex flex-row items-center border-spacing-2">
                <div className="font-bold text-slate-400">
                </div>
              </div>
            </div>
          </div> */}

          <div className="backdrop:blur-sm bg-gradient-to-r from-transparent via-slate-300 to-transparent w-full max-w-[1024px] mt-6 mb-4">
            <div className="flex items-center flex-row justify-between border-spacing-2 min-h-[1px] px-2">
            </div>
          </div>

          <CoursesClassroomsListEdit courses={courses} idc={assessment.courses} classrooms={classrooms} idr={assessment.classrooms} />

          <div className="backdrop:blur-sm bg-gradient-to-r from-transparent via-slate-300 to-transparent w-full max-w-[1024px] mt-6 mb-4">
            <div className="flex items-center flex-row justify-between border-spacing-2 min-h-[1px] px-2">
            </div>
          </div>

          <div className="fixed right-0 top-0 mt-28 mr-8">
            <Link href='#other_questions'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </Link>
          </div>
        </section>
      </div>

      <div className="mr-14">
        <div className="flex flex-row w-full max-w-[1024px] justify-center mt-4 font-bold">Questões da avaliação</div>
        <QuestionsListEdit data={questions} ids={assessment.questions} clear={true} valiant={true} />
      </div>

      <section id="other_questions" className="pt-8 mr-14">
        <div className="flex flex-row w-full max-w-[1024px] justify-center mt-2 font-bold">Questões disponíveis</div>
        <QuestionsListEdit data={questions} ids={assessment.questions} />
      </section>
      <div className="fixed right-0 bottom-8 mr-8">
        <Link href='#assessment'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </Link>
      </div>
    </>
  )
}