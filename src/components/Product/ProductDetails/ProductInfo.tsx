import { TProduct, TProductOptionCombination } from "@types";
import Price from "../../common/Price/Price";

import styles from "../styles.module.css";

type ProductInfoProps = {
  readonly product: TProduct;
  readonly currentCombination: TProductOptionCombination | undefined;
};

export default function ProductInfo({
  product,
  currentCombination,
}: ProductInfoProps) {
  const isOutOfStock =
    !currentCombination?.price || currentCombination.stock <= 0;

  return (
    <div className={styles.productInfo}>
      <h1 className={styles.productTitle}>{product.name}</h1>
      <div className={styles.brand}>{product.brand}</div>
      <div className={styles.price}>
        {isOutOfStock ? (
          <p className="text-danger fw-bold fs-4">Out of stock</p>
        ) : (
          <Price price={currentCombination?.price} />
        )}
      </div>

      <p className={styles.description}>{product.description}</p>
    </div>
  );
}
