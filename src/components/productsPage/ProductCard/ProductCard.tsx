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
      <ViewDetailsButton product={product} />
    </div>
  );
});

export default ProductCard;
