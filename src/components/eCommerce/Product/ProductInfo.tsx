import { TProduct, TProductOptionCombination } from "@types";
import styles from "./styles.module.css";
import Price from "../common/price/Price";

type ProductInfoProps = {
  readonly product: TProduct;
  readonly currentCombination: TProductOptionCombination;
};

export default function ProductInfo({
  product,
  currentCombination,
}: ProductInfoProps) {
  return (
    <div className={styles.productInfo}>
      <h1 className={styles.productTitle}>{product.name}</h1>
      <div className={styles.brand}>{product.brand}</div>
      <Price price={currentCombination?.price} />
      <p className={styles.description}>{product.description}</p>
    </div>
  );
}
