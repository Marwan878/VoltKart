import { useAppSelector } from "@store/hooks";
import { Search } from "lucide-react";
import { Button, Col, Form, InputGroup } from "react-bootstrap";

type SearchFilterProps = {
  search: () => void;
  setSearchOrderId: (id: string) => void;
};

export default function SearchFilter({
  search,
  setSearchOrderId,
}: Readonly<SearchFilterProps>) {
  const { searchOrderId } = useAppSelector((state) => state.dashboardOrders);

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
