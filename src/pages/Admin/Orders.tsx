import {
  ErrorMessage,
  LoadingIndicator,
  OrdersEmptyTableContent,
  OrdersFilters,
  OrdersHeader,
  OrdersPagination,
  OrdersTableBodyContent,
  OrdersTableContainer,
} from "@components/admin/orders";
import useOrders from "@hooks/admin/useOrders";
import { Container } from "react-bootstrap";

const Orders = () => {
  const {
    setCurrentPage,
    handleStatusChange,
    search,
    setSearchOrderId,
    setStatusFilter,
    setSortOrder,
    setItemsPerPage,
    clearFilters,
    refreshOrders,
  } = useOrders();

  return (
    <Container fluid>
      <OrdersHeader />

      <OrdersFilters
        search={search}
        setSearchOrderId={setSearchOrderId}
        setStatusFilter={setStatusFilter}
        setSortOrder={setSortOrder}
        setItemsPerPage={setItemsPerPage}
        refreshOrders={refreshOrders}
        clearFilters={clearFilters}
      />

      <ErrorMessage />
      <LoadingIndicator />

      <OrdersTableContainer>
        <OrdersTableBodyContent handleStatusChange={handleStatusChange} />
        <OrdersEmptyTableContent />
      </OrdersTableContainer>

      <OrdersPagination setCurrentPage={setCurrentPage} />
    </Container>
  );
};

export default Orders;
