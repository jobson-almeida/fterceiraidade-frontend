import SkeletonPaper from "@/app/components/skeleton-paper";
import React, { Suspense } from "react";

export default function Layout({ children }) {
    return (
        <Suspense fallback={<SkeletonPaper rowsPerPage={6} />}>
            {children}
        </Suspense>
    )
}


