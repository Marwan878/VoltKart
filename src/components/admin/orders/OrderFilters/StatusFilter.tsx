import { ORDER_STATUSES } from "@constants";
import { Col, Form } from "react-bootstrap";
import { useOrders } from "../Orders";

import { TOrderStatus } from "@types";

export default function StatusFilter() {
  const { statusFilter, setStatusFilter } = useOrders();

  return (
    <Col md={2}>
      <Form.Label>Status</Form.Label>
      <Form.Select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value as TOrderStatus | "")}
      >
        <option value="">All Statuses</option>
        {Object.values(ORDER_STATUSES).map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </Form.Select>
    </Col>
  );
}
