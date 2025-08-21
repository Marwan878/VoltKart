import { Heading } from "@components/common";
import { CartItemList, CartSubtotalPrice } from "@components/cart/index";
import { Loading, LottieHandler } from "@components/feedback";
import useCart from "@hooks/useCart";
import { Container } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const Cart = () => {
  const { loading, error, products } = useCart();
  const [searchParams] = useSearchParams();

  if (searchParams.get("payment_status") === "success") {
    return (
      <LottieHandler
        message="Your order has been placed successfully"
        type="success"
      />
    );
  }

  return (
    <Container className="min-vh-100">
      <Heading title="Your Cart" />
      <Loading
        status={loading}
        error={error}
        type="ordersTable"
        empty={products.length === 0}
        message="Your cart is empty"
      >
        <div className="shadow py-1 px-2 p-md-5 pb-md-1 mb-5">
          <CartItemList cartItems={products} />
          <CartSubtotalPrice />
        </div>
      </Loading>
    </Container>
  );
};

export default Cart;
