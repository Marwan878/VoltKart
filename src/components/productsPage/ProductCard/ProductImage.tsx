import { isProductNew } from "@utils";

import { TProduct } from "@types";

import styles from "./styles.module.css";
import ImageWithFallback from "@components/common/ImageWithFallback";

type ProductImageProps = {
  product: TProduct;
};

export default function ProductImage({ product }: Readonly<ProductImageProps>) {
  const { images, name } = product;

  return (
    <div className={styles.imageContainer}>
      {isProductNew(product) && <span className={styles.newBadge}>NEW</span>}
      <ImageWithFallback
        src={images.main}
        alt={name}
        fallback={"/brand.png"}
        className={styles.productImage}
      />
    </div>
  );
}
