import ChartPerformance from "./chart-performance";
import { getChartData } from "../utils/get-chart-data";

export default async function ChartPerformanceData({ title }) {
  const data = await getChartData();

  return <ChartPerformance data={data} title={title} />;
}
