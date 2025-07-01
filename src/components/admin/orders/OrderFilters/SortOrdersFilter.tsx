import { Col, Form } from "react-bootstrap";
import { useOrders } from "../Orders";

export default function SortOrdersFilter() {
  const { sortOrder, setSortOrder } = useOrders();

  return (
    <Col md={2}>
      <Form.Label>Sort Orders</Form.Label>
      <Form.Select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
      >
        <option value="desc">Newest First</option>
        <option value="asc">Oldest First</option>
      </Form.Select>
    </Col>
  );
}
