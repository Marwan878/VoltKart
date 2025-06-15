import { TProduct } from "@types";
import { useState } from "react";
import AddToCart from "./AddToCart";
import QuantitySelector from "./QuantitySelector";
import Wishlist from "./Wishlist";

import styles from "./style.module.css";

export default function ProductActions({
  product,
  sku,
}: {
  readonly product: TProduct;
  readonly sku: string | undefined;
}) {
  const currentCombination = product.optionCombinations.find(
    (combination) => combination.sku === sku
  );

  const [combinationQuantity, setCombinationQuantity] = useState(
    currentCombination?.quantity ?? 1
  );

  return (
    <div className={styles.actionsSection}>
      {sku && (
        <>
          <QuantitySelector
            quantity={combinationQuantity}
            max={product.maxOrderQuantity ?? Infinity}
            productId={product.id}
            onQuantityChange={setCombinationQuantity}
          />

          <AddToCart
            productId={product.id}
            sku={sku}
            quantity={currentCombination?.quantity ?? 0}
          />
        </>
      )}

      <Wishlist productId={product.id} />
    </div>
  );
}
