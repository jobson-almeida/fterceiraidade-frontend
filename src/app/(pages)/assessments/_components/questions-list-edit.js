"use client"
import QuestionCard from "../../questions/_components/question-card"
import { addFrom, removeFrom } from "../lib/functions-for-filters";
import { useEffect, useState } from "react";

export default function QuestionsListEdit({ data, ids, clear, valiant }) {
    const [questions, setQuestions] = useState([])

    if (clear === true) {
        const ISSERVER = typeof window === "undefined";
        if (!ISSERVER && localStorage.getItem("questions_assessments") !== null) {
            console.log(localStorage.getItem("questions_assessments"))
            localStorage.removeItem("questions_assessments");
        }
    }

    useEffect(() => {
        if (clear) setQuestions(addFrom(data, ids))
        if (!clear) setQuestions(removeFrom(data, ids))
    }, [ids, data])


    // questions.splice(question.length, 0, { 'value': 'fuck you' });


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
