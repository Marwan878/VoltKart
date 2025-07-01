import { useAppSelector } from "@store/hooks";
import { Col, Form } from "react-bootstrap";

type SortOrdersFilterProps = {
  setSortOrder: (order: "asc" | "desc") => void;
};

export default function SortOrdersFilter({
  setSortOrder,
}: Readonly<SortOrdersFilterProps>) {
  const sortOrder = useAppSelector((state) => state.dashboardOrders.sortOrder);

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
