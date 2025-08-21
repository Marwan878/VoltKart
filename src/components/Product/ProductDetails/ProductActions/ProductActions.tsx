import { useState } from "react";
import AddToCart from "./AddToCart";
import Wishlist from "./Wishlist";
import QuantityCounter from "./QuantityCounter";

import { TProduct } from "@types";

import styles from "./style.module.css";
import { Alert } from "react-bootstrap";

export default function ProductActions({
  product,
  sku,
}: {
  readonly product: TProduct;
  readonly sku: string | undefined;
}) {
  const [quantity, setQuantity] = useState(1);

  const currentCombination = product.optionCombinations.find(
    (combination) => combination.sku === sku
  );

  const stock = currentCombination?.stock ?? 0;

  return (
    <div>
      {stock > 0 && stock < 5 && (
        <Alert variant="warning">Only {stock} left in stock! Order soon.</Alert>
      )}
      {stock === 0 && <Alert variant="danger">Out of stock!</Alert>}
      {stock > 0 && product.maxOrderQuantity && (
        <Alert variant="success">
          Please note: You can have at most{" "}
          <span className="fw-bold">{product.maxOrderQuantity}</span> from this
          product in your cart.
        </Alert>
      )}
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
    </div>
  );
}
