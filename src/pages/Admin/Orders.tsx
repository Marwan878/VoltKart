import { OrdersProvider } from "@components/admin/orders/Orders";
import useOrders from "@hooks/admin/useOrders";

const Orders = () => {
  const ordersData = useOrders();

  return (
    <OrdersProvider {...ordersData}>
      <OrdersProvider.Header />

      <OrdersProvider.OrdersFilters />

      <OrdersProvider.ErrorMessage />
      <OrdersProvider.LoadingIndicator />

      <OrdersProvider.TableContainer>
        <OrdersProvider.TableBodyContent />
        <OrdersProvider.EmptyTableContent />
      </OrdersProvider.TableContainer>

      <OrdersProvider.OrdersPagination />
    </OrdersProvider>
  );
};

export default Orders;
