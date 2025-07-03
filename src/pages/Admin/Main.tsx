import Charts from "@components/admin/metrics/Charts";
import MetricsCards from "@components/admin/metrics/MetricsCards";
import TimeFilter from "@components/admin/metrics/TimeFilter";
import { Loading } from "@components/feedback";
import { TIME_FILTERS } from "@constants";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import getMetrics from "@store/metrics/act/getMetrics";
import { useEffect } from "react";
import { Container } from "react-bootstrap";

const Main = () => {
  const { loading, error } = useAppSelector((state) => state.metrics);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMetrics("Day"));
  }, [dispatch]);

  return (
    <Container fluid>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Admin Dashboard</h1>

      <div className="d-flex flex-wrap gap-2 mb-4 justify-content-start">
        {TIME_FILTERS.map((filter) => (
          <TimeFilter key={filter} filter={filter} />
        ))}
      </div>

      <Loading error={error} status={loading} type="mainAdmin">
        <MetricsCards />
        <Charts />
      </Loading>
    </Container>
  );
};

export default Main;
