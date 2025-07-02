import Button from "@components/ui/Button";
import addToCart from "@store/cart/act/addToCart";
import { useAppDispatch, useAppSelector } from "@store/hooks";

import { TProduct } from "@types";

import styles from "./style.module.css";

type AddToCartProps = {
  product: TProduct;
  sku: string;
  quantity: number;
  maxOrderQuantity: number;
  stock: number;
};

export default function AddToCart({
  product,
  sku,
  quantity,
  maxOrderQuantity,
  stock,
}: Readonly<AddToCartProps>) {
  const dispatch = useAppDispatch();

  const productVariantsInCart = useAppSelector((state) =>
    state.cart.cartItemsIdentifiers.filter(
      (cartProduct) => cartProduct.product_id === product.id
    )
  );

  const thisVariantInCart = productVariantsInCart.find(
    (cartProduct) => cartProduct.sku === sku
  );

  const totalQuantityOfProductsWithSameProductIdInCart =
    productVariantsInCart.reduce((acc, product) => acc + product.quantity, 0);

  const quantityToBeAddedExceedsStock =
    (thisVariantInCart?.quantity ?? 0) + quantity > stock;

  const quantityToBeAddedExceedsMaxOrderQuantity =
    totalQuantityOfProductsWithSameProductIdInCart + quantity >
    maxOrderQuantity;

  const isDisabled =
    quantity <= 0 ||
    quantityToBeAddedExceedsStock ||
    quantityToBeAddedExceedsMaxOrderQuantity;

  return (
    <Button
      variant="blackToBlue"
      className={styles.addToCartButton}
      disabled={isDisabled}
      onClick={() => dispatch(addToCart({ product, sku, quantity, stock }))}
    >
      Add to Cart
    </Button>
  );
}
