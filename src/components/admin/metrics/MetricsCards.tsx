import { useAppSelector } from "@store/hooks";
import PlainNumberMetricCard from "./PlainNumberMetricCard";
import { Row, Col } from "react-bootstrap";

export default function MetricsCards() {
  const { totalRevenue, newClientsCount, ordersPlaced, avgOrderRate } =
    useAppSelector((state) => state.metrics);

  return (
    <Row className="g-3 mb-4">
      <Col xs={12} sm={6} lg={3}>
        <PlainNumberMetricCard title="Total Revenue" value={totalRevenue} />
      </Col>
      <Col xs={12} sm={6} lg={3}>
        <PlainNumberMetricCard title="New Clients" value={newClientsCount} />
      </Col>
      <Col xs={12} sm={6} lg={3}>
        <PlainNumberMetricCard title="Orders Placed" value={ordersPlaced} />
      </Col>
      <Col xs={12} sm={6} lg={3}>
        <PlainNumberMetricCard title="Avg. Order Rate" value={avgOrderRate} />
      </Col>
    </Row>
  );
}
