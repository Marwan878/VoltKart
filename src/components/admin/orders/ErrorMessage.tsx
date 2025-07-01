import { Alert } from "react-bootstrap";
import { useOrders } from "./Orders";

export default function ErrorMessage() {
  const { error } = useOrders();

  if (!error) return null;

  return (
    <Alert variant="danger" className="mb-3">
      <strong>Error:</strong> {error}
    </Alert>
  );
}
