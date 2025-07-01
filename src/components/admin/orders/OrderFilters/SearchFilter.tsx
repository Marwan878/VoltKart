import { Search } from "lucide-react";
import { Button, Col, Form, InputGroup } from "react-bootstrap";
import { useOrders } from "../Orders";

export default function SearchFilter() {
  const { searchOrderId, setSearchOrderId, search } = useOrders();

  return (
    <Col md={4}>
      <Form.Label>Search by Order ID</Form.Label>
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Enter Order ID..."
          value={searchOrderId}
          onChange={(e) => setSearchOrderId(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && search()}
        />
        <Button variant="outline-secondary" onClick={search}>
          <Search size={16} />
        </Button>
      </InputGroup>
    </Col>
  );
}
