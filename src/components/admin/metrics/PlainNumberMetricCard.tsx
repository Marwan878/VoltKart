import styles from "./styles.module.css";

type PlainNumberMetricCardProps = {
  title: string;
  value: number;
};

export default function PlainNumberMetricCard({
  title,
  value,
}: Readonly<PlainNumberMetricCardProps>) {
  return (
    <div className={`${styles.metricCard}`} style={{ flexGrow: 1 }}>
      <div>{title}</div>
      <div style={{ fontSize: "2rem", fontWeight: "bold" }}>{value}</div>
    </div>
  );
}
