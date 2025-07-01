import { ORDER_STATUSES } from "@constants";
import { useAppSelector } from "@store/hooks";
import { Col, Form } from "react-bootstrap";

import { TOrderStatus } from "@types";

type StatusFilterProps = {
  setStatusFilter: (status: TOrderStatus | "") => void;
};

export default function StatusFilter({
  setStatusFilter,
}: Readonly<StatusFilterProps>) {
  const statusFilter = useAppSelector(
    (state) => state.dashboardOrders.statusFilter
  );

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
