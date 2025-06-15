import { Heart } from "lucide-react";
import { actLikeToggle } from "@store/wishlist/wishlistSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";

import styles from "./style.module.css";

export default function Wishlist({
  productId,
}: {
  readonly productId: string;
}) {
  const dispatch = useAppDispatch();
  const { itemsId } = useAppSelector((state) => state.wishlist);

  const isWishlisted = itemsId.includes(productId);

  return (
    <button
      className={`${styles.wishlistButton} ${
        isWishlisted ? styles.wishlisted : ""
      }`}
      onClick={() => dispatch(actLikeToggle(productId))}
    >
      <Heart size={20} fill={isWishlisted ? "#ff6b6b" : "transparent"} />
    </button>
  );
}
