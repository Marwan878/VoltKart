import Button from "@components/ui/Button";
import actAddToCart from "@store/cart/act/actAddToCart";
import { useAppDispatch } from "@store/hooks";

import styles from "./style.module.css";

export default function AddToCart({
  productId,
  sku,
  quantity,
}: {
  readonly productId: string;
  readonly sku: string | undefined;
  readonly quantity: number;
}) {
  const dispatch = useAppDispatch();
  return (
    <Button
      variant="blackToBlue"
      className={styles.addToCartButton}
      disabled={!productId || !sku || quantity <= 0}
      onClick={() => dispatch(actAddToCart({ productId, sku, quantity }))}
    >
      Add to Cart
    </Button>
  );
}
