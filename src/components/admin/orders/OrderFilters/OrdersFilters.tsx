import { Row } from "react-bootstrap";
import ItemsPerPageFilter from "./ItemsPerPageFilter";
import RefreshOrdersAndClearFilters from "./RefreshOrdersAndClearFilters";
import SearchFilter from "./SearchFilter";
import SortOrdersFilter from "./SortOrdersFilter";
import StatusFilter from "./StatusFilter";

const OrdersFilters = () => {
  return (
    <Row className="g-3 align-items-end mb-4">
      <SearchFilter />
      <StatusFilter />
      <SortOrdersFilter />
      <ItemsPerPageFilter />
      <RefreshOrdersAndClearFilters />
    </Row>
  );
};

export default OrdersFilters;
