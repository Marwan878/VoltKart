import removeFromCart from "@store/cart/act/removeFromCart";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { X } from "lucide-react";
import { useRowProductContext } from "./RowProduct";

type RemoveFromCartButtonProps = {
  className?: string;
  sku: string;
};

export default function RemoveFromCartButton({
  className,
  sku,
}: Readonly<RemoveFromCartButtonProps>) {
  const { product } = useRowProductContext();
  const dispatch = useAppDispatch();
  const cartItem = useAppSelector((state) =>
    state.cart.products.find((item) => item.sku === sku)
  );

  if (!cartItem || !product) return null;

  return (
    <button
      aria-label="Remove from cart."
      className={className}
      onClick={() => dispatch(removeFromCart({ cartItem }))}
    >
      <X aria-hidden />
    </button>
  );
}
