import React, { Suspense } from "react";
import { headCells } from "../../components/head-cells-assessments";
import SkeletonAssessments from "../../components/skeleton-assessments";

export default function Layout({ children }) {
    const totalHead = headCells.length
    return (
        <Suspense fallback={<SkeletonAssessments rowsPerPage={5} totalHead={totalHead} />}>
            {children}
        </Suspense>
    )
}


