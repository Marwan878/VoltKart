import { useAppDispatch } from "@store/hooks";
import { toggleWishlist } from "@store/wishlist/wishlistSlice";
import { X } from "lucide-react";
import { useRowProductContext } from "./RowProduct";

type RemoveFromWishlistProps = {
  className?: string;
};

export default function RemoveFromWishlist({
  className,
}: Readonly<RemoveFromWishlistProps>) {
  const dispatch = useAppDispatch();
  const { product } = useRowProductContext();

  if (!product) return null;

  return (
    <button
      className={`text-danger p-2 ${className}`}
      onClick={() => dispatch(toggleWishlist(product.id))}
      style={{ fontSize: "1.2rem" }}
      aria-label="Remove item"
    >
      <X aria-hidden />
    </button>
  );
}
