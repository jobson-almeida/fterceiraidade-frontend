"use client"
import { twMerge } from "tailwind-merge";
import { ArrowSmallUpIcon } from "@heroicons/react/24/solid";

export default function ListHead(children) {
  const { order, orderBy, onRequestSort, headCells } = children

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  }

  return (
    <div className="table-header-group">
      <div className="table-row">
        {headCells.map((headCell, index) =>
          headCell.sorteable ? (
            <div key={index} className="table-cell border-b font-medium p-4 pl-8 pt-0 pb-3    text-left min-w-[160px]">
              <span onClick={createSortHandler(headCell.id)}
                className={twMerge("group cursor-pointer inline-flex justify-start flex-row text-sm font-medium items-center", orderBy === headCell.id ? "select-none" : "hover:text-black/60")}
              >
                {headCell.label}

                {orderBy === headCell.id ?
                  (<ArrowSmallUpIcon width={16} height={16}
                    className={twMerge("group-hover:opacity-100", order === 'asc' ? "rotate-0" : "rotate-180")} />) :
                  (<ArrowSmallUpIcon width={16} height={16}
                    className="opacity-0 group-hover:opacity-100 rotate-0" />)}
              </span>
            </div>) : (<div key={headCell.id} className="table-cell border-b" />
          ))}
      </div>
    </div>
  )
}

// <th key={headCell.id} className={twMerge(index === 0 ? "pl-8" : "pl-4", "border-b pt-0 pb-3 text-slate-400 text-left")}>
//   <span onClick={createSortHandler(headCell.id)}
//     className={twMerge("group cursor-pointer inline-flex justify-start flex-row text-sm font-medium items-center",
//       orderBy === headCell.id ? "select-none" : "hover:text-black/60")}
//   >
//     {headCell.label}
//     {orderBy === headCell.id ?
//       (<ArrowSmallUpIcon width={16} height={16}
//         className={twMerge("group-hover:opacity-100", order === 'asc' ? "rotate-0" : "rotate-180")} />) :
//       (<ArrowSmallUpIcon width={16} height={16}
//         className="opacity-0 group-hover:opacity-100 rotate-0" />)}
//   </span>
// </th>

