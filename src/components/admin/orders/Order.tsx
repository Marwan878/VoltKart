import { TOrderItem } from "@types";

type OrderProps = {
  order: TOrderItem;
};

export default function Order({ order }: Readonly<OrderProps>) {
  return (
    <tr key={order.id}>
      <td style={{ padding: 12 }}>{order.id}</td>
      <td>{order.user_id}</td>
      <td>
        {order.currency}
        {order.total}
      </td>
      <td>{order.status}</td>
      <td>
        <select style={{ padding: "0.3rem 1rem", borderRadius: 4 }}></select>
      </td>
    </tr>
  );
}
