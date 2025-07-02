import { useState } from "react";
import AddToCart from "./AddToCart";
import Wishlist from "./Wishlist";
import QuantityCounter from "./QuantityCounter";

import { TProduct } from "@types";

import styles from "./style.module.css";

export default function ProductActions({
  product,
  sku,
}: {
  readonly product: TProduct;
  readonly sku: string | undefined;
}) {
  const [quantity, setQuantity] = useState(1);

  const stock =
    product.optionCombinations.find((combination) => combination.sku === sku)
      ?.stock ?? 0;

  return (
    <div className={styles.actionsSection}>
      <Wishlist productId={product.id} />
      {sku && (
        <>
          <QuantityCounter
            stock={stock}
            product={product}
            sku={sku}
            quantity={quantity}
            setQuantity={setQuantity}
          />
          <AddToCart
            product={product}
            sku={sku}
            quantity={quantity}
            maxOrderQuantity={product.maxOrderQuantity ?? Infinity}
            stock={stock}
          />
        </>
      )}
    </div>
  );
}
