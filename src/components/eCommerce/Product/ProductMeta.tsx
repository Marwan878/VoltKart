import { TProduct, TProductOptionCombination } from "@types";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

type ProductMetaProps = {
  readonly product: TProduct;
  readonly currentCombination: TProductOptionCombination | null;
};

export default function ProductMeta({
  product,
  currentCombination,
}: ProductMetaProps) {
  return (
    <div className={styles.productMeta}>
      <div className={styles.metaRow}>
        <span className={styles.metaLabel}>SKU:</span>
        <span className={styles.metaValue}>{currentCombination?.sku}</span>
      </div>

      <div className={styles.metaRow}>
        <span className={styles.metaLabel}>Categories:</span>
        <span className={styles.metaValue}>
          {product.categories.map((category, index) => (
            <span key={category}>
              <Link to={`/products/${category}`} className={styles.metaLink}>
                {category}
              </Link>
              {index < product.categories.length - 1 && ", "}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
