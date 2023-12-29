import React, { Suspense } from "react";
import { headCells } from "./head-cells";
import SkeletonAssessments from "./_components/skeleton-assessments";

export default function Layout({ children }) {
    const totalHead = headCells.length
    return (
        <Suspense fallback={<SkeletonAssessments rowsPerPage={5} totalHead={totalHead} />}>
            {children}
        </Suspense>
    )
}


