import { Link } from "react-router-dom";
import { useWishlistContext } from "./WishlistProduct";

type ProductNameProps = {
  className?: string;
};

export default function ProductName({ className }: Readonly<ProductNameProps>) {
  const { product } = useWishlistContext();

  if (!product) return null;

  return (
    <Link
      to={`/product/${product.id}`}
      className={`text-primary pe-4 fw-light lh-base ${className}`}
      style={{ fontSize: "0.9rem" }}
    >
      {product.name}
    </Link>
  );
}
