import { TProduct, TProductOptionCombination } from "@types";
import Categories from "./Categories";
import SKU from "./SKU";

import styles from "../../styles.module.css";

type ProductMetaProps = {
  readonly product: TProduct;
  readonly currentCombination: TProductOptionCombination | undefined;
};

export default function ProductMeta({
  product,
  currentCombination,
}: ProductMetaProps) {
  return (
    <div className={styles.productMeta}>
      <SKU sku={currentCombination?.sku ?? "No SKU available."} />
      <Categories product={product} />
    </div>
  );
}
