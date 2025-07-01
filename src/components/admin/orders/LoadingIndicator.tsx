import { Spinner } from "react-bootstrap";
import { useAppSelector } from "@store/hooks";

export default function LoadingIndicator() {
  const { loading } = useAppSelector((state) => state.dashboardOrders);

  if (!loading) return null;

  return (
    <div className="text-center py-5">
      <Spinner animation="border" role="status" className="me-2" />
      <span>Loading orders...</span>
    </div>
  );
}
