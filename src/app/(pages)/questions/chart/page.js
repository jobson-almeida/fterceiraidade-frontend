import ChartPerformance from "@/app/components/chart-performance";

export default async function Page() {
    return (
        <div>
            <ChartPerformance source="chart_data" title="Desempenho da questão" />
        </div>
    )
}