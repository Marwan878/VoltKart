import { isProductNew } from "@utils";

import { TProduct } from "@types";

import styles from "./styles.module.css";

type ProductImageProps = {
  product: TProduct;
};

export default function ProductImage({ product }: Readonly<ProductImageProps>) {
  const { images, name } = product;

  return (
    <div className={styles.imageContainer}>
      {isProductNew(product) && <span className={styles.newBadge}>NEW</span>}
      <img src={images.main} alt={name} className={styles.productImage} />
    </div>
  );
}
