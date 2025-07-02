import { useAppSelector } from "@store/hooks";
import { Table } from "react-bootstrap";
import { Order } from "./Order";

export const OrdersTable = () => {
  const orders = useAppSelector((state) => state.orders.products);

  return (
    <Table responsive className="table-bordered">
      <thead className="table-dark">
        <tr>
          <th className="py-2">Order ID</th>
          <th className="text-nowrap">Purchase Date</th>
          <th>Status</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody className="border border-1 border-dark">
        {orders.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </tbody>
    </Table>
  );
};
