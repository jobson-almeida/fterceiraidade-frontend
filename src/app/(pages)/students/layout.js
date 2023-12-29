import SkeletonTable from "@/app/components/skeleton-list";
import React, { Suspense } from "react";
import { headCells } from "./head-cells";

export default function Layout({ children }) {
    const totalHead = headCells.length
    return (
        <Suspense fallback={<SkeletonTable rowsPerPage={5} totalHead={totalHead} />}>
            {children}
        </Suspense>
    )
}


