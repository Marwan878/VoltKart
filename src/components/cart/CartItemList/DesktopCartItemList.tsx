import Product from "@components/common/RowProduct/RowProduct";
import { Table } from "react-bootstrap";

import { TCartItemForState, TProduct } from "@types";

import styles from "./styles.module.css";

type DesktopCartItemListProps = {
  cartItems: TCartItemForState[];
};

export default function DesktopCartItemList({
  cartItems,
}: Readonly<DesktopCartItemListProps>) {
  return (
    <Table className={styles.cartContainer}>
      <thead className={`${styles.tableHeader}`}>
        <tr>
          <th className="py-3 ps-2">Product</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((cartItem) => (
          <DesktopCartItem
            key={cartItem.sku}
            product={cartItem.product}
            quantity={cartItem.quantity}
            sku={cartItem.sku}
            price={
              cartItem.product.optionCombinations.find(
                (el) => el.sku === cartItem.sku
              )?.price.discounted ?? 0
            }
          />
        ))}
      </tbody>
    </Table>
  );
}

type DesktopCartItemProps = {
  product: TProduct;
  quantity: number;
  price: number;
  sku: string;
};

function DesktopCartItem({
  product,
  quantity,
  price,
  sku,
}: Readonly<DesktopCartItemProps>) {
  return (
    <Product product={product}>
      <tr>
        <td>
          <Product.RemoveFromCartButton className="text-black me-4" sku={sku} />
          <Product.ProductImage />
          <Product.ProductName className="text-black fs-6 ms-2" />
        </td>
        <td className="position-relative">
          <Product.QuantitySelector style={{ width: "10rem" }} />
        </td>
        <td>{price * quantity}</td>
      </tr>
    </Product>
  );
}
