import TotalOrdersBarChart from "@components/admin/metrics/TotalOrdersBarChar";
import TotalRevenueLineChart from "@components/admin/metrics/TotalRevenueLineChart";
export default function Charts() {
  return (
    <div className="d-flex gap-4">
      <TotalRevenueLineChart />
      <TotalOrdersBarChart />
    </div>
  );
}
