"use client"
import { useCallback, useMemo, useState } from "react"
import { getComparator, stableSort } from "../../../utils/sortable"
import Pagination from "../../../components/structural/pagination"
import { TrashIcon, EyeIcon } from "@heroicons/react/24/solid"
import ListHead from "../../../components/list-head"
import Search from "../../../utils/search"
import Link from "next/link"
import { headCells } from "../head-cells"

export default function TeachersList({ data }) {
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
            <div className="fixed top-0 right-0 mt-5 mr-8 z-[9997]">
                <Link className="relative overflow-hidden align-middle select-none font-sans font-bold text-center uppercase py-3 px-6 rounded-lg 
                     transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none       
                   bg-[#546e7a] text-xs text-white shadow-md shadow-gray-500/10
                     hover:shadow-lg hover:shadow-gray-500/20 
                     focus:opacity-[0.85] focus:shadow-none 
                     active:opacity-[0.85] active:shadow-none"
                    href={'/students/register'}>novo professor
                </Link>
            </div>
            <Search onChangeSearch={handleSearch} onSearch={value} onPlaceHolder="Procurar professor" />
            <div className="not-prose relative bg-white rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate-100 mask-image:#fff bg-[10px 10px]"></div>
                <div className="relative rounded-xl overflow-auto">
                    <div className="shadow-sm overflow-auto mt-8">
                        <div className="table border-collapse table-auto w-full text-sm">
                            <ListHead
                                headCells={headCells}
                                order={order}
                                orderBy={orderBy}
                                onRequestSort={handleRequestSort}
                            />
                            <div className="table-row-group bg-white">
                                {datas.map((teacher) => (
                                    <div key={teacher.id} className="table-row  ">
                                        <div className="table-cell border-b border-slate-100 p-4 pl-8">{teacher.firstname} {teacher.lastname}</div>
                                        <div className="table-cell border-b border-slate-100 p-4 pl-8">{teacher.email}</div>
                                        <div className="table-cell border-b border-slate-100 p-4 pl-8">{teacher.address.city}, {teacher.address.state}, {teacher.address.street}</div>
                                        <div className="table-cell border-b border-slate-100 p-4 pl-8">{teacher.phone}</div>
                                        <div className="table-cell border-b border-slate-100 p-4 pl-8">{teacher.createdAt}</div>
                                        <div className="table-cell border-b border-slate-100 p-4 pl-8">
                                            <div className="inline-flex items-center justify-center gap-2">
                                                <Link href={`/teachers/${teacher.id}`}>
                                                    <EyeIcon width={20} height={20} className="cursor-pointer" />
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