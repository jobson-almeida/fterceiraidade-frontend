"use client"
import { useCallback, useMemo, useState } from "react"
import { headCells } from "./head-cells-assessments"
import { getComparator, stableSort } from "../utils/sortable"
import Pagination from "./structural/pagination"
import { ChartBarIcon, EyeIcon, TrashIcon } from "@heroicons/react/24/solid"
import HeadTable from "./list-head"
import Search from "../utils/search"
import Link from "next/link"

export default function AssessmentsList({ data }) {
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
        return row.description.toLowerCase().includes(event.target.value.toLowerCase());
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
      <Search onChangeSearch={handleSearch} onSearch={value} onPlaceHolder="Procurar avaliação" />
      <div className="not-prose relative bg-white rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 mask-image:#fff bg-[10px 10px]"></div>
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
                {datas.map((assessment) => (
                  <div key={assessment.id} className="table-row   ">
                    <div className="table-cell border-b border-slate-100 p-4 pl-8">{assessment.description}</div>
                    <div className="table-cell border-b border-slate-100 p-4 pl-8">{assessment.start_date}</div>
                    <div className="table-cell border-b border-slate-100 p-4 pl-8">{assessment.end_date}</div>
                    <div className="table-cell border-b border-slate-100 p-4 pl-8">
                      <div className="inline-flex items-center justify-center gap-2">
                        <Link href={`/assessments/${assessment.id}`}>
                          <EyeIcon width={20} height={20} className="cursor-pointer" />
                        </Link>
                        <Link href="/assessments/chart">
                          <ChartBarIcon width={20} height={20} className="cursor-pointer" />
                        </Link>
                        <Link href="">
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
