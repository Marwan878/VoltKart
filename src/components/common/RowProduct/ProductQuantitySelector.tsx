import QuantitySelector from "@components/common/Counter/Counter";
import decrementCartItemQuantity from "@store/cart/act/decrementCartItemQuantity";
import incrementCartItemQuantity from "@store/cart/act/incrementCartItemQuantity";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { CSSProperties } from "react";
import { useRowProductContext } from "./RowProduct";

type QuantitySelectorProps = {
  className?: string;
  style?: CSSProperties;
};

export default function ProductQuantitySelector({
  className = "",
  style,
}: Readonly<QuantitySelectorProps>) {
  const { product } = useRowProductContext();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.products);

  if (!product) return null;

  const cartItem = cartItems.find(
    (cartItem) => cartItem.product_id === product.id
  );

  if (!cartItem) return null;

  const stock =
    cartItem.product.optionCombinations.find((el) => el.sku === cartItem.sku)
      ?.stock ?? 0;

  const incrementQuantity = () => {
    const currentQuantity = cartItem.quantity;

    if (currentQuantity >= (cartItem.product.maxOrderQuantity ?? Infinity))
      return;

    dispatch(
      incrementCartItemQuantity({
        productId: product.id,
        sku: cartItem.sku,
        quantity: 1,
        maxOrderQuantity: cartItem.product.maxOrderQuantity ?? Infinity,
        stock,
      })
    );
  };

  const decrementQuantity = () => {
    const currentQuantity = cartItem.quantity;

    if (currentQuantity <= 0) return;

    dispatch(
      decrementCartItemQuantity({
        cartItem,
        quantity: 1,
      })
    );
  };

  const isIncrementDisabled =
    cartItem.quantity >= (cartItem.product.maxOrderQuantity ?? Infinity) ||
    cartItem.quantity >= stock;

  const isDecrementDisabled = cartItem.quantity <= 1;
  return (
    <QuantitySelector
      isDecrementDisabled={isDecrementDisabled}
      isIncrementDisabled={isIncrementDisabled}
      className={className}
      onIncrement={incrementQuantity}
      onDecrement={decrementQuantity}
      quantity={cartItem.quantity}
      style={style}
    />
  );
}
