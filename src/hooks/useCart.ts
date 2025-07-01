import { getCartProducts } from "@store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { resetOrderStatus } from "@store/orders/ordersSlice";
import { useEffect } from "react";

const useCart = () => {
  const dispatch = useAppDispatch();

  const { products, loading, error } = useAppSelector((state) => state.cart);
  const placeOrderStatus = useAppSelector((state) => state.orders.loading);

  useEffect(() => {
    dispatch(getCartProducts());

    return () => {
      dispatch(resetOrderStatus());
    };
  }, [dispatch]);

  return {
    loading,
    error,
    products,
    placeOrderStatus,
  };
};

export default useCart;
