"use client"
import ChartPerformance from "../components/chart-performance";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="pb-8">
        <ChartPerformance source="chart_data" title="Desempenho dos cursos" />
      </div>
      <div className="pb-8">
        <ChartPerformance source="chart_data" title="Desempenho das turmas" />
      </div>
      <div className="pb-8">
        <ChartPerformance source="chart_data" title="Desempenho dos estudantes" />
      </div>
    </div >
  )
}