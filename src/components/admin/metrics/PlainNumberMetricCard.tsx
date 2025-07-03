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
    <div
      className={`${styles.metricCard} d-flex flex-column h-100 justify-content-between`}
    >
      <div>{title}</div>
      <div className={`fw-bold ${styles.metricCardValue}`}>
        {value.toLocaleString()}
      </div>
    </div>
  );
}
