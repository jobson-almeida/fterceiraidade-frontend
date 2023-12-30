"use client"
import Link from "next/link"
import QuestionCard from "./question-card"

export default function QuestionsList({ data }) {
    return (
        <>
            <div className="fixed top-0 right-0 mt-5 mr-8 z-[9997]">
                <Link className="relative overflow-hidden align-middle select-none font-sans font-bold text-center uppercase py-3 px-6 rounded-lg 
                       transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none       
                     bg-[#546e7a] text-xs text-white shadow-md shadow-gray-500/10
                       hover:shadow-lg hover:shadow-gray-500/20 
                       focus:opacity-[0.85] focus:shadow-none 
                       active:opacity-[0.85] active:shadow-none"
                    href={'/questions/register'}>nova questão
                </Link>
            </div>
            {data.map((question, index) => (
                <div key={index}>
                    <QuestionCard
                        key={question.id}
                        question={question}
                        checkable={false}
                    />
                </div>
            ))}
        </>
    )
}
