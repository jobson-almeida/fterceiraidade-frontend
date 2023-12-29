"use client"
import { TrashIcon } from "@heroicons/react/24/solid";
import { addFrom, removeFrom } from "../lib/functions-for-filters";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CoursesListEdit({ data, ids, checkable = false, deletable = false, clear }) {
    const [checked, setChecked] = useState(false);
    const [courses, setCourses] = useState([])

    if (clear) {
        const ISSERVER = typeof window === "undefined";
        if (!ISSERVER && localStorage.getItem("courses_assessments") !== null) {
            localStorage.removeItem("courses_assessments");
        }
    }

    useEffect(() => {
        if (clear) setCourses(addFrom(data, ids))
        if (!clear) setCourses(removeFrom(data, ids))
    }, [data, ids])

    const handleChange = id => () => {
        //
    }

    return (
        <>
            <div className="not-prose relative bg-white rounded-xl overflow-hidden w-full max-w-[1024px]">
                <div className="absolute inset-0 bg-grid-slate-100 mask-image:#fff bg-[10px 10px]"></div>
                <div className="relative rounded-xl overflow-auto">
                    <div className="shadow-sm overflow-auto mt-8">
                        <div className="table border-collapse table-auto w-full max-w-[1024px] text-sm">

                            <div className="bg-white flex-col flex  ">
                                {courses && courses.map((course) => (
                                    <div key={course.id} className="inline-flex">
                                        <div className="justify-center flex items-center border-b border-slate-100 py-4 pr-4 pl-8">
                                            {deletable &&
                                                <Link href="">
                                                    <TrashIcon width={20} height={20} className="cursor-pointer" />
                                                </Link>}
                                            {checkable &&
                                                <input className="my-1" type="checkbox" checked={checked} onChange={handleChange(course.id)} />}
                                        </div>
                                        <div className="justify-start flex items-center w-full pr-4 border-b border-slate-100">{course.name}</div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}