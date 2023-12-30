//import SkeletonTable from "@/app/components/skeleton-list";
import { Suspense } from "react";
import { headCells } from "../../components/head-cells-teachers";

export default function Layout({ children }) {
    const totalHead = headCells.length
    return (
        // <Suspense fallback={<SkeletonTable rowsPerPage={5} totalHead={totalHead} />}>
        <Suspense>
            {children}
        </Suspense>
    )
}


