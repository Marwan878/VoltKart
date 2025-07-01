import Counter from "@components/common/Counter/Counter";
import { useAppSelector } from "@store/hooks";
import { Dispatch, SetStateAction } from "react";

import { TProduct } from "@types";

type QuantityCounterProps = {
  stock: number;
  product: TProduct;
  sku: string;
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
};

export default function QuantityCounter({
  stock,
  product,
  sku,
  quantity,
  setQuantity,
}: Readonly<QuantityCounterProps>) {
  const quantityInCart = useAppSelector(
    (state) =>
      state.cart.products.find(
        (cartProduct) =>
          cartProduct.sku === sku && cartProduct.product_id === product.id
      )?.quantity ?? 0
  );

  const productsWithSameProductIdInCart = useAppSelector((state) =>
    state.cart.products.filter(
      (cartProduct) => cartProduct.product_id === product.id
    )
  );

  const totalQuantityOfProductsWithSameProductIdInCart =
    productsWithSameProductIdInCart.reduce(
      (acc, product) => acc + product.quantity,
      0
    );

  const isIncrementDisabled =
    quantity + quantityInCart >= stock ||
    quantity + totalQuantityOfProductsWithSameProductIdInCart >=
      (product.maxOrderQuantity ?? Infinity);

  const handleIncrement = () => {
    if (isIncrementDisabled) return;

    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity <= 1) return;

    setQuantity(quantity - 1);
  };

  return (
    <Counter
      quantity={quantity}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      isIncrementDisabled={isIncrementDisabled}
      isDecrementDisabled={quantity <= 1}
    />
  );
}
