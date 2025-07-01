import useOrders from "@hooks/admin/useOrders";
import { Filter } from "lucide-react";

export default function EmptyTableContent() {
  const { totalOrders } = useOrders();

  if (totalOrders > 0) {
    return null;
  }

  return (
    <tr>
      <td colSpan={6} className="text-center py-4">
        <div className="text-muted">
          <Filter size={48} className="mb-2 opacity-50" />
          <p className="mb-0">No orders found</p>
          <small>Try adjusting your filters or search criteria</small>
        </div>
      </td>
    </tr>
  );
}
