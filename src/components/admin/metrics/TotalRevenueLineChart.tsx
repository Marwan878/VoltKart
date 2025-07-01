import { useAppSelector } from "@store/hooks";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import styles from "./styles.module.css";

export default function TotalRevenueLineChart() {
  const { timeToRevenue } = useAppSelector((state) => state.metrics);

  return (
    <div className={styles.metricCard} style={{ flex: 2 }}>
      <h3 className="mb-4">Total Revenue</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={timeToRevenue}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#4f46e5"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
