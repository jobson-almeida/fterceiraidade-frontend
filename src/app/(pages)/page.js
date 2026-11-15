import { Suspense } from "react";
import ChartPerformance from "../components/chart-performance";
import ChartPerformanceLoading from "../components/chart-performance-loading";
import { getChartData } from "../utils/get-chart-data";

async function PerformanceCharts() {
  const data = await getChartData();

  return (
    <div className="flex flex-col">
      <div className="pb-8">
        <ChartPerformance data={data} title="Desempenho dos cursos" />
      </div>
      <div className="pb-8">
        <ChartPerformance data={data} title="Desempenho das turmas" />
      </div>
      <div className="pb-8">
        <ChartPerformance data={data} title="Desempenho dos estudantes" />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col">
          <div className="pb-8">
            <ChartPerformanceLoading title="Desempenho dos cursos" />
          </div>
          <div className="pb-8">
            <ChartPerformanceLoading title="Desempenho das turmas" />
          </div>
          <div className="pb-8">
            <ChartPerformanceLoading title="Desempenho dos estudantes" />
          </div>
        </div>
      }
    >
      <PerformanceCharts />
    </Suspense>
  );
}
