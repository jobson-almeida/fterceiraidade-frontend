import { Suspense } from "react";
import ChartPerformanceData from "@/app/components/chart-performance-data";
import ChartPerformanceLoading from "@/app/components/chart-performance-loading";

export default function Page() {
    return (
        <Suspense fallback={<ChartPerformanceLoading title="Desempenho da questão" />}>
            <ChartPerformanceData title="Desempenho da questão" />
        </Suspense>
    );
}