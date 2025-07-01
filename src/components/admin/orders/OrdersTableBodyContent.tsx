import { ORDER_STATUSES } from "@constants";
import { useAppSelector } from "@store/hooks";
import { formatDate } from "@utils";
import { Badge, Dropdown } from "react-bootstrap";

import { TOrderStatus } from "@types";

const statusToVariant: Record<TOrderStatus, string> = {
  pending: "warning",
  shipping: "info",
  delivered: "success",
  cancelled: "danger",
} as const;

type OrdersTableBodyContentProps = {
  handleStatusChange: (orderId: string, status: TOrderStatus) => void;
};

export default function OrdersTableBodyContent({
  handleStatusChange,
}: Readonly<OrdersTableBodyContentProps>) {
  const orders = useAppSelector((state) => state.dashboardOrders.orders);

  return orders.map((order) => (
    <tr key={order.id}>
      <td>
        <code className="text-primary">{order.id}</code>
      </td>
      <td>{order.user_id}</td>
      <td>
        <strong>
          {order.currency}
          {order.total.toFixed(2)}
        </strong>
      </td>
      <td>
        <Badge bg={statusToVariant[order.status]} className="text-capitalize">
          {order.status}
        </Badge>
      </td>
      <td>
        <small>{formatDate(order.created_at)}</small>
      </td>
      <td>
        <Dropdown>
          <Dropdown.Toggle variant="outline-secondary" size="sm">
            Update Status
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {ORDER_STATUSES.map((status) => (
              <Dropdown.Item
                key={status}
                onClick={() => handleStatusChange(order.id, status)}
              >
                {status}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
  ));
}
