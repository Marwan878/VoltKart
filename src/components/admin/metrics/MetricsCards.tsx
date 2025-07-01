import { useAppSelector } from "@store/hooks";
import PlainNumberMetricCard from "./PlainNumberMetricCard";

export default function MetricsCards() {
  const { totalRevenue, newClientsCount, ordersPlaced, avgOrderRate } =
    useAppSelector((state) => state.metrics);

  return (
    <div className="d-flex gap-4 mb-4">
      <PlainNumberMetricCard title="Total Revenue" value={totalRevenue} />
      <PlainNumberMetricCard title="New Clients" value={newClientsCount} />
      <PlainNumberMetricCard title="Orders Placed" value={ordersPlaced} />
      <PlainNumberMetricCard title="Avg. Order Rate" value={avgOrderRate} />
    </div>
  );
}
