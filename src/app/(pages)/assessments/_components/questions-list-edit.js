"use client"
import QuestionCard from "../../questions/_components/question-card"
import { useState } from "react";

export default function QuestionsListEdit({ data, ids, clear, valiant }) {
    const [questions, setQuestions] = useState([])

    return (
        <>
            {questions && questions.map((question, index) => (
                <div key={index}>
                    <QuestionCard
                        key={question.id}
                        question={question}
                        checkable={false}
                        valiant={valiant}
                    />
                </div>
            ))}
        </>
    )
}
