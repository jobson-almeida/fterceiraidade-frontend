"use client"
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function Pagination({ count, onChangePage }) {
  const [active, setActive] = useState(1);

  useEffect(() => {
    onChangePage(active)
  })

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };

  const next = () => {
    if (active === count) return;
    setActive(active + 1);
  };

  return (
    <div className="flex items-center mt-2 gap-4">
      <button
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}
      >
        <ChevronLeftIcon strokeWidth={2} className="h-4 w-4" />
      </button>
      <div className="flex items-center gap-1">
        {[...Array(count)].map((_, index) => (
          <button key={index + 1}
            onClick={() => setActive(index + 1)}
            className={
              twMerge("relative text-xs w-10 h-10 max-w-[40px] max-h-[40px] text-center uppercase rounded-md  align-middle select-none", active === index + 1 ? "bg-gray-300  text-black shadow-md shadow-gray-300/10 active:opacity-[0.85] active:shadow-none" : "text-slate-800 hover:bg-gray-400/10 active:bg-gray-300/20 transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none")}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === count}
      >
        <ChevronRightIcon strokeWidth={2} className="h-4 w-4" />
      </button>
    </div >
  );
}
