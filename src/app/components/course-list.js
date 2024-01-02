"use client"
import { useCallback, useMemo, useState } from "react";
import Pagination from "./structural/pagination";
import CourseCard from "./course-card";
import Link from "next/link";

export default function CoursesList({ data }) {
  const [page, setPage] = useState(1);
  const rowsPerPage = 6
  const count = Math.ceil(data.length / rowsPerPage)

  const handlePage = useCallback(
    (value) => {
      setPage(value);
    },
    []
  );

  const items = useMemo(
    () => data.slice((rowsPerPage * page - rowsPerPage), (rowsPerPage * page)),
    [data, rowsPerPage, page]
  );

  return (
    <div>
      <div className="fixed top-0 right-0 mt-5 mr-8 z-[9997]">
        <Link className="relative overflow-hidden align-middle select-none font-sans font-bold text-center uppercase py-3 px-6 rounded-lg 
                     transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none       
                   bg-[#546e7a] text-xs text-white shadow-md shadow-gray-500/10
                     hover:shadow-lg hover:shadow-gray-500/20 
                     focus:opacity-[0.85] focus:shadow-none 
                     active:opacity-[0.85] active:shadow-none"
          href={'/courses/register'}>novo curso
        </Link>
      </div>
      <div className="flex flex-col items-center pt-14">
        <div className="grid lgg:grid-cols-test3 lg:grid-cols-test2 md:grid-cols-test2 sm:grid-cols-test1 mt-3 gap-4">
          {items.map((course, i) => (
            <CourseCard key={i} data={course} />
          ))}
        </div>
        <div className="flex items-center justify-center" >
          {count > 0 && <Pagination count={count} onChangePage={handlePage} />}
        </div>
      </div>
    </div>
  )
}
