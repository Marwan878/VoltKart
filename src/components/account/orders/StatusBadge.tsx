import { TOrderStatus } from "@types";
import { Badge } from "react-bootstrap";

type StatusBadgeProps = {
  status: TOrderStatus;
};

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  let bg: string;
  switch (status) {
    case "shipping":
      bg = "warning";
      break;
    case "delivered":
      bg = "success";
      break;
    default:
      bg = "secondary";
      break;
  }

  return <Badge bg={bg}>{status}</Badge>;
};
