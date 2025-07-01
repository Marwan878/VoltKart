import { CATEGORIES } from "@constants";
import { TProduct } from "@types";
import { Link } from "react-router-dom";

export default function Categories({
  product,
}: {
  readonly product: TProduct;
}) {
  return (
    <div>
      <span>Category: </span>
      <span>
        <Link
          to={`/products/${product.categoryId}`}
          className="text-primary text-decoration-underline"
        >
          {CATEGORIES.find((category) => category.id === product.categoryId)
            ?.displayName ?? "Generic"}
        </Link>
      </span>
    </div>
  );
}
