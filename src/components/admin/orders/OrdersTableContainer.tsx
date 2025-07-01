import { Table } from "react-bootstrap";
import { ReactNode } from "react";

interface OrdersTableProps {
  children: ReactNode;
}

export default function OrdersTableContainer({
  children,
}: Readonly<OrdersTableProps>) {
  return (
    <Table striped className="flex-grow-1">
      <thead className="table-dark">
        <tr>
          <th>Order ID</th>
          <th>Customer ID</th>
          <th>Total</th>
          <th>Status</th>
          <th>Created Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  );
}
