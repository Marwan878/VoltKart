import { useAppDispatch, useAppSelector } from "@store/hooks";
import { placeOrder } from "@store/orders/ordersSlice";
import { useState } from "react";
import { Button } from "react-bootstrap";
import CartSubtotalModal from "./CartSubtotalModal";

import styles from "./styles.module.css";

const CartSubtotalPrice = () => {
  const [loading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector((state) => state.cart.products);

  if (cartItems.length === 0) return null;

  const currency = cartItems[0].product.optionCombinations[0].price.currency;

  const subtotal = cartItems.reduce((accumulator, cartItem) => {
    const price = cartItem.product.optionCombinations.find(
      (el) => el.sku === cartItem.sku
    )?.price.discounted;

    if (!price) return accumulator;

    return accumulator + price * cartItem.quantity;
  }, 0);

  const modalHandler = () => {
    setShowModal(!showModal);
    setError(null);
  };

  return (
    <>
      <CartSubtotalModal
        showModal={showModal}
        modalHandler={modalHandler}
        subtotal={subtotal}
        currency={currency}
        loading={loading}
        error={error}
        placeOrderHandler={() => dispatch(placeOrder())}
      />

      <div className={styles.container}>
        <span>Subtotal:</span>
        <span>
          {subtotal.toFixed(2)} {currency}
        </span>
      </div>
      <div className={styles.container}>
        <span> </span>
        <span>
          <Button
            variant="info"
            style={{ color: "white" }}
            onClick={modalHandler}
          >
            Place Order
          </Button>
        </span>
      </div>
    </>
  );
};

export default CartSubtotalPrice;
