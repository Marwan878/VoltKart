import Charts from "@components/admin/metrics/Charts";
import MetricsCards from "@components/admin/metrics/MetricsCards";
import TimeFilter from "@components/admin/metrics/TimeFilter";
import { Loading } from "@components/feedback";
import { TIME_FILTERS } from "@constants";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import getMetrics from "@store/metrics/act/getMetrics";
import { useEffect } from "react";

const Main = () => {
  const { loading, error } = useAppSelector((state) => state.metrics);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMetrics("Day"));
  }, [dispatch]);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div className="d-flex gap-4 my-4">
        {TIME_FILTERS.map((filter) => (
          <TimeFilter key={filter} filter={filter} />
        ))}
      </div>
      <Loading error={error} status={loading}>
        <MetricsCards />
        <Charts />
      </Loading>
    </div>
  );
};

export default Main;
