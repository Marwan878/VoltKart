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
      {product.features.map((feature) => (
        <li key={feature} className={styles.feature}>
          <Check size={16} style={{ color: "var(--light-blue)" }} aria-hidden />
          <p>{feature}</p>
        </li>
      ))}
    </ul>
  );
}
