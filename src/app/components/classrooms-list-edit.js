"use client"
import { TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Link from "next/link";

export default function ClassroomsListEdit({ data, ids, checkable = false, deletable = false, clear }) {
    const [checked, setChecked] = useState(false);
    const [classrooms, setClassrooms] = useState([])

    return (
        <>
            <div className="not-prose relative bg-white rounded-xl overflow-hidden w-full max-w-[1024px]">
                <div className="absolute inset-0 bg-grid-slate-100 mask-image:#fff bg-[10px 10px]"></div>
                <div className="relative rounded-xl overflow-auto">
                    <div className="shadow-sm overflow-auto mt-8">
                        <div className="table border-collapse table-auto w-full max-w-[1024px] text-sm">
                            <div className="flex flex-col bg-white">
                                {classrooms && classrooms.map((classroom) => (
                                    <div key={classroom.id} className="inline-flex  ">
                                        <div className="justify-center flex items-center border-b border-slate-100 py-4 pr-4 pl-8">
                                            {deletable &&
                                                <Link href="">
                                                    <TrashIcon width={20} height={20} className="cursor-pointer" />
                                                </Link>}
                                            {checkable &&
                                                <input className="my-1" type="checkbox" checked={checked} onChange={handleChange(classroom.id)} />}
                                        </div>
                                        <div className="justify-start flex items-center min-w-fit pr-4 border-b border-slate-100">{classroom.name}</div>
                                        <div className="justify-start flex items-center w-full pr-4 border-b border-slate-100">{classroom.description}</div>
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
// return (
//     <div className="flex flex-col items-center pt-14">
//         <div className="grid lgg:grid-cols-test3 lg:grid-cols-test2 md:grid-cols-test2 sm:grid-cols-test1 mt-3 gap-4">
//             {classrooms && classrooms.map((classroom, i) => (
//                 <Paper key={i} data={classroom} />
//             ))}
//         </div>
//     </div>
// )
//}
