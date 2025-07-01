import { RefreshCw } from "lucide-react";
import { Button, Col } from "react-bootstrap";

type RefreshOrdersAndClearFiltersProps = {
  refreshOrders: () => void;
  clearFilters: () => void;
};

export default function RefreshOrdersAndClearFilters({
  refreshOrders,
  clearFilters,
}: Readonly<RefreshOrdersAndClearFiltersProps>) {
  return (
    <Col md={2}>
      <div className="d-flex gap-2">
        <Button
          variant="outline-primary"
          aria-label="Refresh orders"
          onClick={refreshOrders}
        >
          <RefreshCw size={16} aria-hidden />
        </Button>
        <Button variant="outline-secondary" onClick={clearFilters}>
          Clear
        </Button>
      </div>
    </Col>
  );
}
