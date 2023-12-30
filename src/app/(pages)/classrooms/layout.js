//import SkeletonPaper from "@/app/components/skeleton-paper";
import { Suspense } from "react";

export default function Layout({ children }) {
    return (
        // <Suspense fallback={<SkeletonPaper rowsPerPage={6} />}>
        <Suspense>
            {children}
        </Suspense>
    )
}


