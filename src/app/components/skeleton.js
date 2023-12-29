import { twMerge } from "tailwind-merge";

export default function Skeleton({ style }) {
  return (
    <div
      className="w-fit h-fit rounded-2xl bg-gray-100/80 p-0 relative isolate overflow-hidden 
          before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] 
          before:bg-gradient-to-r before:from-transparent before:via-black/10 before:to-transparent"
    >
      <div className="flex items-center justify-between">
        <div className={twMerge(style, "bg-gray-200 rounded-full")}></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}