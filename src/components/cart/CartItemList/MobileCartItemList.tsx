import Product from "@components/common/RowProduct/RowProduct";

import { TCartItemForState, TProduct } from "@types";

import styles from "./styles.module.css";

type MobileCartItemListProps = {
  cartItems: TCartItemForState[];
};

export default function MobileCartItemList({
  cartItems,
}: Readonly<MobileCartItemListProps>) {
  return (
    <div className={styles.cartContainer}>
      {cartItems.map((cartItem) => (
        <MobileCartItem
          key={cartItem.sku}
          product={cartItem.product}
          sku={cartItem.sku}
          price={
            cartItem.product.optionCombinations.find(
              (el) => el.sku === cartItem.sku
            )?.price.discounted ?? 0
          }
          quantity={cartItem.quantity}
        />
      ))}
    </div>
  );
}

function MobileCartItem({
  product,
  sku,
  price,
  quantity,
}: Readonly<{
  product: TProduct;
  sku: string;
  price: number;
  quantity: number;
}>) {
  return (
    <Product product={product}>
      <div className="d-flex flex-column align-items-start gap-3 border-bottom border-black pb-3 py-3 w-100 mb-2">
        <div>
          <Product.RemoveFromCartButton className="text-black me-2" sku={sku} />
          <Product.ProductImage />
          <Product.ProductName className="text-black fs-6 ms-2" />
        </div>
        <div className="d-flex justify-content-between w-100">
          <Product.QuantitySelector />
          <span className="text-black fs-6">
            {(price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </Product>
  );
}
