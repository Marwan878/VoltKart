import { useAppSelector } from "@store/hooks";
import { Minus, Plus } from "lucide-react";

import styles from "./style.module.css";

export default function QuantitySelector({
  quantity,
  onQuantityChange,
  max,
  productId,
}: {
  readonly quantity: number;
  readonly onQuantityChange: (delta: number) => void;
  readonly max: number;
  readonly productId: string;
}) {
  const cartItems = useAppSelector((state) => state.cart.products);
  const productQuantityInCart =
    cartItems.find((product) => product.id === productId)?.maxOrderQuantity ??
    0;

  const handleQuantityChange = (delta: number) => {
    if (
      (quantity ?? 0) + delta <= 0 ||
      (quantity ?? 0) + delta > (max ?? Infinity) - productQuantityInCart
    )
      return;

    onQuantityChange(delta);
  };

  return (
    <div className={styles.quantitySelector}>
      <button
        className={styles.quantityButton}
        onClick={() => handleQuantityChange(-1)}
        disabled={quantity <= 1}
      >
        <Minus size={16} />
      </button>
      <span className={styles.quantity}>{quantity}</span>
      <button
        className={styles.quantityButton}
        onClick={() => handleQuantityChange(1)}
        disabled={quantity >= max}
      >
        <Plus size={16} />
      </button>
    </div>
  );
}
