import { TProduct, TProductOptionCombination } from "@types";
import { memo } from "react";
import { Form } from "react-bootstrap";
import styles from "./styles.module.css";

const { cartItem, cartItemSelection } = styles;

type CartItemProps = TProduct & {
  changeQuantityHandler: (id: string, sku: string, quantity: number) => void;
  removeItemHandler: (id: number) => void;
  combination: TProductOptionCombination;
};

const CartItem = memo(
  ({
    id,
    max,
    quantity,
    changeQuantityHandler,
    combination,
  }: CartItemProps) => {
    // render option list
    const renderOptions = Array(max)
      .fill(0)
      .map((_, idx) => {
        const quantity = ++idx;
        return (
          <option value={quantity} key={quantity}>
            {quantity}
          </option>
        );
      });

    const changeQuantity = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const quantity = +event.target.value;
      changeQuantityHandler(id, combination.sku, quantity);
    };

    return (
      <div className={cartItem}>
        <div className={cartItemSelection}>
          <span className="d-block mb-1">Quantity</span>
          <Form.Select value={quantity} onChange={changeQuantity}>
            {renderOptions}
          </Form.Select>
        </div>
      </div>
    );
  }
);

export default CartItem;
