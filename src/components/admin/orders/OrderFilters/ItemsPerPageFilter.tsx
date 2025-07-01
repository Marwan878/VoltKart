import { useAppSelector } from "@store/hooks";
import { Col, Form } from "react-bootstrap";

const ITEMS_PER_PAGE_OPTIONS = [5, 10, 25, 50];

type ItemsPerPageFilterProps = {
  setItemsPerPage: (items: number) => void;
};

export default function ItemsPerPageFilter({
  setItemsPerPage,
}: Readonly<ItemsPerPageFilterProps>) {
  const itemsPerPage = useAppSelector(
    (state) => state.dashboardOrders.itemsPerPage
  );

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
