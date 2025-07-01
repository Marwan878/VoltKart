import { OrdersTable } from "@components/account/orders/OrdersTable";
import { Heading } from "@components/common";
import { Loading } from "@components/feedback";
import useOrders from "@hooks/useOrders";

const Orders = () => {
  const { loading, error } = useOrders();

  return (
    <>
      <Heading title="My Orders" />
      <Loading status={loading} error={error} type="ordersTable">
        <OrdersTable />
      </Loading>
    </>
  );
};

export default Orders;
