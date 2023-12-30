import SkeletonQuestions from "@/app/components/skeleton-questions";
import React, { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <Suspense fallback={<SkeletonQuestions rowsPerPage={7} />}>
      {children}
    </Suspense>
  )
}
