import { Link } from "react-router-dom";
import { useRowProductContext } from "./RowProduct";

type ProductNameProps = {
  className?: string;
};

export default function ProductName({ className }: Readonly<ProductNameProps>) {
  const { product } = useRowProductContext();

  if (!product) return null;

  return (
    <Link
      to={`/product/${product.id}`}
      className={`text-primary fw-light lh-base ${className}`}
      style={{ fontSize: "0.9rem" }}
    >
      {product.name}
    </Link>
  );
}
