import TotalOrdersBarChart from "@components/admin/metrics/TotalOrdersBarChar";
import TotalRevenueLineChart from "@components/admin/metrics/TotalRevenueLineChart";
import { Col, Row } from "react-bootstrap";

export default function Charts() {
  return (
    <Row className="mb-4">
      <Col xs={12} lg={6} className="mb-4 mb-lg-0">
        <TotalRevenueLineChart />
      </Col>
      <Col xs={12} lg={6}>
        <TotalOrdersBarChart />
      </Col>
    </Row>
  );
}
