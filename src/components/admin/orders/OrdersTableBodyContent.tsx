import { ORDER_STATUSES } from "@constants";
import { formatDate } from "@utils";
import { Badge, Dropdown } from "react-bootstrap";
import { useOrders } from "./Orders";

import { TOrderStatus } from "@types";

const statusToVariant: Record<TOrderStatus, string> = {
  pending: "warning",
  shipping: "info",
  delivered: "success",
  cancelled: "danger",
} as const;

export default function OrdersTableBodyContent() {
  const { orders, handleStatusChange } = useOrders();

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
