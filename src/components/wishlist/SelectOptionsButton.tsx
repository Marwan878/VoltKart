import { ShoppingCart } from "lucide-react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

type SelectOptionsButtonProps = {
  productId: string;
  className?: string;
};

export default function SelectOptionsButton({
  productId,
  className,
}: Readonly<SelectOptionsButtonProps>) {
  return (
    <Button
      className={`bg-black border-0 fw-bold ${className}`}
      to={`/product/${productId}`}
      as={Link}
    >
      <ShoppingCart className="me-2" />
      Select options
    </Button>
  );
}
