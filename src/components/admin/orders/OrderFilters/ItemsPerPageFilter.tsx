import { Col, Form } from "react-bootstrap";
import { useOrders } from "../Orders";

const ITEMS_PER_PAGE_OPTIONS = [5, 10, 25, 50];

export default function ItemsPerPageFilter() {
  const { itemsPerPage, setItemsPerPage } = useOrders();

  return (
    <Col md={2}>
      <Form.Label>Per Page</Form.Label>
      <Form.Select
        value={itemsPerPage}
        onChange={(e) => setItemsPerPage(Number(e.target.value))}
      >
        {ITEMS_PER_PAGE_OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Form.Select>
    </Col>
  );
}
