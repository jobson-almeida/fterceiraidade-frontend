"use client"
import { useCallback, useMemo, useState } from "react"
import { headCells } from "./head-cells-students"
import { getComparator, stableSort } from "../utils/sortable"
import Pagination from "./structural/pagination"
import { ChartBarIcon, TrashIcon, EyeIcon } from "@heroicons/react/24/solid"
import HeadTable from "./list-head"
import Search from "../utils/search"
import Link from "next/link"

export default function StudentsList({ data }) {
  const [searchered, setSearchered] = useState([]);
  const [value, setValue] = useState("");
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('firstname');
  const [page, setPage] = useState(1);
  const rowsPerPage = 5
  const count = Math.ceil(data.length / rowsPerPage)

  const handleRequestSort = (_, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSearch = useCallback(
    (event) => {
      const foundRows = data.filter((row) => {
        return row.firstname.toLowerCase().includes(event.target.value.toLowerCase())
          || row.lastname.toLowerCase().includes(event.target.value.toLowerCase());
      });
      setValue(event.target.value)
      setSearchered(foundRows);
    },
    [data]
  );

  const handlePage = useCallback(
    (value) => {
      setPage(value);
    },
    []
  );

  const items = useMemo(
    () => stableSort(data, getComparator(order, orderBy)).slice((rowsPerPage * page - rowsPerPage), (rowsPerPage * page)),
    [order, orderBy, data, rowsPerPage, page]
  );

  const datas = value.length > 0 ? searchered : items

  return (
    <>
      <Search onChangeSearch={handleSearch} onSearch={value} onPlaceHolder="Procurar estudante" />
      <div className="not-prose relative bg-white rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 mask-image:#FFFFFF bg-[10px 10px]"></div>
        <div className="relative rounded-xl overflow-auto">
          <div className="shadow-sm overflow-auto mt-8">
            <div className="table border-collapse table-auto w-full text-sm">
              <HeadTable
                headCells={headCells}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
              />
              <div className="table-row-group bg-white">
                {datas.map((student) => (
                  <div key={student.id} className="table-row  ">
                    <div className="table-cell border-b border-slate-100 p-4 pl-8">{student.firstname} {student.lastname}</div>
                    <div className="table-cell border-b border-slate-100 p-4 pl-8">{student.email}</div>
                    <div className="table-cell border-b border-slate-100 p-4 pl-8">{student.address.city}, {student.address.state}, {student.address.street}</div>
                    <div className="table-cell border-b border-slate-100 p-4 pl-8">{student.phone}</div>
                    <div className="table-cell border-b border-slate-100 p-4 pl-8">{student.createdAt}</div>
                    <div className="table-cell border-b border-slate-100 p-4 pl-8">
                      <div className="inline-flex items-center justify-center gap-2">
                        <Link href={`/students/${student.id}`} as={`/students/${student.id}`}>
                          <EyeIcon width={20} height={20} className="cursor-pointer" />
                        </Link>
                        <Link href="/students/chart" as="/students/chart">
                          <ChartBarIcon width={20} height={20} className="cursor-pointer" />
                        </Link>
                        <Link href="/" as="/">
                          <TrashIcon width={20} height={20} className="cursor-pointer" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-end pr-4 pb-2" >
          {count > 0 && <Pagination count={count} onChangePage={handlePage} />}
        </div>
      </div >
    </>
  )
}
