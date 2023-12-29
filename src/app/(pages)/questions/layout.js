import SkeletonQuestions from "@/app/(pages)/questions/_components/skeleton-questions";
import React, { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <Suspense fallback={<SkeletonQuestions rowsPerPage={7} />}>
      {children}
    </Suspense>
  )
}
