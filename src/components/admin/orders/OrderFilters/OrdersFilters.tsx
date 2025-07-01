import { Row } from "react-bootstrap";
import ItemsPerPageFilter from "./ItemsPerPageFilter";
import RefreshOrdersAndClearFilters from "./RefreshOrdersAndClearFilters";
import SearchFilter from "./SearchFilter";
import SortOrdersFilter from "./SortOrdersFilter";
import StatusFilter from "./StatusFilter";

import { TOrderStatus } from "@types";

type OrdersFiltersProps = {
  search: () => void;
  setSearchOrderId: (id: string) => void;
  setStatusFilter: (status: TOrderStatus | "") => void;
  setSortOrder: (order: "asc" | "desc") => void;
  setItemsPerPage: (items: number) => void;
  refreshOrders: () => void;
  clearFilters: () => void;
};

const OrdersFilters = ({
  search,
  setSearchOrderId,
  setStatusFilter,
  setSortOrder,
  setItemsPerPage,
  refreshOrders,
  clearFilters,
}: Readonly<OrdersFiltersProps>) => {
  return (
    <Row className="g-3 align-items-end mb-4">
      <SearchFilter search={search} setSearchOrderId={setSearchOrderId} />
      <StatusFilter setStatusFilter={setStatusFilter} />
      <SortOrdersFilter setSortOrder={setSortOrder} />
      <ItemsPerPageFilter setItemsPerPage={setItemsPerPage} />
      <RefreshOrdersAndClearFilters
        refreshOrders={refreshOrders}
        clearFilters={clearFilters}
      />
    </Row>
  );
};

export default OrdersFilters;
