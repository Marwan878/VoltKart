import { useAppDispatch } from "@store/hooks";
import { actLikeToggle } from "@store/wishlist/wishlistSlice";
import { X } from "lucide-react";
import { useWishlistContext } from "./WishlistProduct";

type RemoveFromWishlistProps = {
  className?: string;
};

export default function RemoveFromWishlist({
  className,
}: Readonly<RemoveFromWishlistProps>) {
  const dispatch = useAppDispatch();
  const { product } = useWishlistContext();

  return (
    <button
      className={`text-danger p-2 ${className}`}
      onClick={() => dispatch(actLikeToggle(product?.id))}
      style={{ fontSize: "1.2rem" }}
      aria-label="Remove item"
    >
      <X aria-hidden />
    </button>
  );
}
