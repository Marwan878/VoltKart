import { useAppSelector } from "@store/hooks";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function TotalOrdersBarChart() {
  const { timeToOrders } = useAppSelector((state) => state.metrics);
  return (
    <div
      style={{
        background: "#fff",
        padding: "1.5rem",
        borderRadius: "8px",
        flex: 1,
      }}
    >
      <h3 className="mb-4">Total Orders</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={timeToOrders}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="orders" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
