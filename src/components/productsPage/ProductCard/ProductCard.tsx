import { memo } from "react";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ViewDetailsButton from "./ViewDetailsButton";

import { TProduct } from "@types";

import styles from "./styles.module.css";

const ProductCard = memo(({ product }: { readonly product: TProduct }) => {
  return (
    <div className={styles.productCard}>
      <ProductImage product={product} />
      <ProductInfo product={product} />
      <div className="d-flex flex-column justify-content-between align-items-center py-4">
        <div className="fs-5">
          Starts From:{" "}
          <span className="fw-bold">
            $
            {Math.min(
              ...product.optionCombinations.map(
                (option) => option.price.discounted
              )
            )}
          </span>
        </div>
        <ViewDetailsButton product={product} />
      </div>
    </div>
  );
});

export default ProductCard;
