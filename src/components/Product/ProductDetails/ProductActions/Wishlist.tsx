import { useAppDispatch, useAppSelector } from "@store/hooks";
import { toggleWishlist } from "@store/wishlist/wishlistSlice";
import { Heart } from "lucide-react";

import styles from "./style.module.css";

export default function Wishlist({
  productId,
}: {
  readonly productId: string;
}) {
  const dispatch = useAppDispatch();
  const { productIds } = useAppSelector((state) => state.wishlist);

  const isWishlisted = productIds.includes(productId);

  return (
    <button
      className={`${styles.wishlistButton} ${
        isWishlisted ? styles.wishlisted : ""
      }`}
      onClick={() => dispatch(toggleWishlist(productId))}
    >
      <Heart size={20} fill={isWishlisted ? "#ff6b6b" : "transparent"} />
    </button>
  );
}
