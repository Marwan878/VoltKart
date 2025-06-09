import { TProduct } from "@types";
import styles from "./styles.module.css";

export default function ProductFeatures({
  product,
}: {
  readonly product: TProduct;
}) {
  return (
    <div className={styles.features}>
      {product.features.map((feature) => (
        <div key={feature} className={styles.feature}>
          <span className={styles.checkmark}>✓</span>
          <span>{feature}</span>
        </div>
      ))}
    </div>
  );
}
