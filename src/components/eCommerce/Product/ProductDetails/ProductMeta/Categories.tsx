import { TProduct } from "@types";
import { Link } from "react-router-dom";

export default function Categories({
  product,
}: {
  readonly product: TProduct;
}) {
  return (
    <div>
      <span>Categories: </span>
      <span>
        {product.categories.map((category, index) => (
          <span key={category}>
            <Link
              to={`/products/${category}`}
              className="text-primary text-decoration-underline"
            >
              {category
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </Link>
            {index < product.categories.length - 1 && ", "}
          </span>
        ))}
      </span>
    </div>
  );
}
