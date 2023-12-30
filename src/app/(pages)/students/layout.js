//import SkeletonTable from "@/app/components/skeleton-list";
import { headCells } from "../../components/head-cells-students";
import { Suspense } from "react";

export default function Layout({ children }) {
    const totalHead = headCells.length
    return (
        // <Suspense fallback={<SkeletonTable rowsPerPage={5} totalHead={totalHead} />}>
        <Suspense>
            {children}
        </Suspense>
    )
}


