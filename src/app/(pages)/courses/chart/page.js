import { Suspense } from "react";
import ChartPerformanceData from "@/app/components/chart-performance-data";
import ChartPerformanceLoading from "@/app/components/chart-performance-loading";

export default function Page() {
    return (
        <Suspense fallback={<ChartPerformanceLoading title="Desempenho do curso" />}>
            <ChartPerformanceData title="Desempenho do curso" />
        </Suspense>
    );
}