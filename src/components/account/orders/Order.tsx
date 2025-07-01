import { StatusBadge } from "./StatusBadge";

import { TOrderItem } from "@types";

type OrderProps = {
  order: TOrderItem;
};

export const Order = ({ order }: OrderProps) => {
  return (
    <tr className="text-center">
      <td className="">#{order.id}</td>
      <td>{new Date(order.created_at).toLocaleDateString()}</td>
      <td className="text-capitalize">
        <StatusBadge status={order.status} />
      </td>
      <td className="text-nowrap">
        {`${order.currency} ${order.total.toFixed(2)}`}
      </td>
    </tr>
  );
};
