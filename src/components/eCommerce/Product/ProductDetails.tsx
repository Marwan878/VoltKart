import {
  ProductActions,
  ProductFeatures,
  ProductInfo,
  ProductMeta,
  StorageOptions,
} from "@components/eCommerce/Product";
import { TProduct } from "@types";
import { useProductCombination } from "./useProductCombination";

import styles from "./styles.module.css";

export default function ProductDetails({
  product,
  quantity,
  isWishlisted,
}: {
  readonly product: TProduct;
  readonly quantity: number;
  readonly isWishlisted: boolean;
}) {
  const { selectedStorage, currentCombination, handleStorageChange } =
    useProductCombination(product);

  const handleQuantityChange = (delta: number) => {
    // TODO: Implement quantity change logic
  };

  const handleAddToCart = () => {};

  const handleWishlistToggle = () => {
    // TODO: Implement wishlist toggle logic
  };
  return (
    <div className={styles.productDetails}>
      <ProductInfo product={product} currentCombination={currentCombination} />

      <ProductFeatures product={product} />

      <StorageOptions
        product={product}
        selectedStorage={selectedStorage}
        onStorageChange={handleStorageChange}
      />

      <ProductActions
        product={product}
        quantity={quantity}
        isWishlisted={isWishlisted}
        onQuantityChange={handleQuantityChange}
        onAddToCart={handleAddToCart}
        onWishlistToggle={handleWishlistToggle}
      />

      <ProductMeta product={product} currentCombination={currentCombination} />
    </div>
  );
}
