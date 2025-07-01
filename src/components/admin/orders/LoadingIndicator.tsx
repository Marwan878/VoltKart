import { Spinner } from "react-bootstrap";
import { useOrders } from "./Orders";

export default function LoadingIndicator() {
  const { loading } = useOrders();

  if (!loading) return null;

  return (
    <div className="text-center py-5">
      <Spinner animation="border" role="status" className="me-2" />
      <span>Loading orders...</span>
    </div>
  );
}
