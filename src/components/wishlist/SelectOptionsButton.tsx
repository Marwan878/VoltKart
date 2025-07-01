import { ShoppingCart } from "lucide-react";
import { Button } from "react-bootstrap";

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
      href={`/product/${productId}`}
      as={"a"}
    >
      <ShoppingCart className="me-2" aria-hidden />
      Select options
    </Button>
  );
}
