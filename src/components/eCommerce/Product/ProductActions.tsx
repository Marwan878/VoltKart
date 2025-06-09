import { Heart, Minus, Plus } from "lucide-react";
import Button from "../../ui/Button";
import { TProduct } from "@types";
import styles from "./styles.module.css";

type ProductActionsProps = {
  readonly product: TProduct;
  readonly quantity: number;
  readonly isWishlisted: boolean;
  readonly onQuantityChange: (delta: number) => void;
  readonly onAddToCart: () => void;
  readonly onWishlistToggle: () => void;
};

export default function ProductActions({
  product,
  quantity,
  isWishlisted,
  onQuantityChange,
  onAddToCart,
  onWishlistToggle,
}: ProductActionsProps) {
  return (
    <div className={styles.actionsSection}>
      <div className={styles.quantitySelector}>
        <button
          className={styles.quantityButton}
          onClick={() => onQuantityChange(-1)}
          disabled={quantity <= 1}
        >
          <Minus size={16} />
        </button>
        <span className={styles.quantity}>{quantity}</span>
        <button
          className={styles.quantityButton}
          onClick={() => onQuantityChange(1)}
          disabled={quantity >= (product.max ?? Infinity)}
        >
          <Plus size={16} />
        </button>
      </div>

      <Button
        variant="blackToBlue"
        className={styles.addToCartButton}
        onClick={onAddToCart}
      >
        Add to Cart
      </Button>

      <button
        className={`${styles.wishlistButton} ${
          isWishlisted ? styles.wishlisted : ""
        }`}
        onClick={onWishlistToggle}
      >
        <Heart size={20} fill={isWishlisted ? "#ff6b6b" : "transparent"} />
      </button>
    </div>
  );
}
