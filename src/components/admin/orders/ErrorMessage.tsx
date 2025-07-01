import { useAppSelector } from "@store/hooks";
import { Alert } from "react-bootstrap";

export default function ErrorMessage() {
  const { error } = useAppSelector((state) => state.dashboardOrders);

  if (!error) return null;

  return (
    <Alert variant="danger" className="mb-3">
      <strong>Error:</strong> {error}
    </Alert>
  );
}
