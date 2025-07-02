import { TProduct } from "@types";
import { Check } from "lucide-react";

import styles from "../styles.module.css";

export default function ProductFeatures({
  product,
}: {
  readonly product: TProduct;
}) {
  return (
    <ul className={styles.features}>
      {product.features.map((feature, index) => (
        <li key={feature + index} className={styles.feature}>
          <Check
            size={20}
            style={{ color: "var(--light-blue)", flexShrink: 0 }}
            aria-hidden
          />
          <p>{feature}</p>
        </li>
      ))}
    </ul>
  );
}
