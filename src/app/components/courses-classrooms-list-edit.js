"use client"
import React, { useState } from "react"
import SimpleRow from "./simple-row"

export default function CoursesClassroomsListEdit({ courses, idc, classrooms, idr }) {
    const [filtered, setFiltered] = useState(classrooms)

    const selectCourse = (id) => {
        if (id) {
            setFiltered(classrooms.filter((item) => item.course === id))
        } else {
            setFiltered(classrooms)
        }
    }

    const selectClassroom = (id) => {
        console.log(id)
    }

    return (
        <>
            <div className="flex justify-around w-full max-w-[1024px] font-bold">
                <div>
                    Cursos
                </div>
                <div>
                    Turmas
                </div>
            </div>
            <div className="flex flex-row w-full max-x-[1024px] gap-4">

                <div className="not-prose relative bg-white rounded-xl overflow-hidden mt-2 w-full max-w-[504px] h-[504px] overflow-y-auto">
                    <div className="absolute inset-0 bg-grid-slate-100 mask-image:#fff bg-[10px 10px]"></div>
                    <div className="relative rounded-xl overflow-auto">
                        <div className="shadow-sm overflow-auto mt-8">
                            <div className="table border-collapse table-auto w-full max-w-[504px] text-sm">
                                <div className="bg-white flex-col flex">
                                    {courses && courses.map((course, index) => (
                                        <div key={index} className="inline-flex">
                                            <SimpleRow
                                                key={course.id}
                                                data={course}
                                                click={() => selectCourse(course.id)}
                                                check={idc.find((item) => item === course.id)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

                <div className="not-prose relative bg-white rounded-xl overflow-hidden mt-2 w-full max-w-[504px] h-[504px] overflow-y-auto">
                    <div className="absolute inset-0 bg-grid-slate-100 mask-image:#fff bg-[10px 10px]"></div>
                    <div className="relative rounded-xl overflow-auto">
                        <div className="shadow-sm overflow-auto mt-8">
                            <div className="table border-collapse table-auto text-sm w-full max-w-[504px]">
                                <div className="bg-white flex-col flex">
                                    {filtered.length > 0 && filtered.map((classroom, index) => (
                                        <div key={index} className="inline-flex">
                                            <SimpleRow
                                                key={classroom.id}
                                                data={classroom}
                                                click={() => selectClassroom(classroom.id)}
                                                check={idr.find((item) => item === classroom.id)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}