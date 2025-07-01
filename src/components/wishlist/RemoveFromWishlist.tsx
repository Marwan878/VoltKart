import { useAppDispatch } from "@store/hooks";
import { toggleWishlist } from "@store/wishlist/wishlistSlice";
import { X } from "lucide-react";

export default function RemoveFromWishlist({
  productId,
}: {
  readonly productId: string;
}) {
  const dispatch = useAppDispatch();

  return (
    <button
      className="text-danger p-2"
      onClick={() => dispatch(toggleWishlist(productId))}
      style={{ fontSize: "1.2rem" }}
      aria-label="Remove item"
    >
      <X aria-hidden />
    </button>
  );
}
