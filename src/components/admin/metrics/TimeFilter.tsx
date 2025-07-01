import { TIME_FILTERS } from "@constants";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import getMetrics from "@store/metrics/act/getMetrics";
import { setActiveFilter } from "@store/metrics/metricsSlice";

import styles from "./styles.module.css";

type TimeFilterProps = {
  filter: (typeof TIME_FILTERS)[number];
};

export default function TimeFilter({ filter }: Readonly<TimeFilterProps>) {
  const activeFilter = useAppSelector((state) => state.metrics.activeFilter);
  const dispatch = useAppDispatch();

  const isActive = activeFilter === filter;

  const handleFilterChange = () => {
    dispatch(setActiveFilter(filter));
    dispatch(getMetrics(filter));
  };

  return (
    <button
      onClick={handleFilterChange}
      className={`${styles.filter} ${isActive ? styles.activeFilter : ""}`}
    >
      {filter}
    </button>
  );
}
