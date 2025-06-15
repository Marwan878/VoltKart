import { TPrice } from "@types";

import styles from "./styles.module.css";

export default function Price({ price }: { readonly price: TPrice }) {
  return (
    <div>
      {price.currency}
      {price.discountPercent > 0
        ? price.discounted.toFixed(2)
        : price.original.toFixed(2)}
      {price.discountPercent > 0 && (
        <span className={styles.originalPrice}>
          ${price.original.toFixed(2)}
        </span>
      )}
    </div>
  );
}
