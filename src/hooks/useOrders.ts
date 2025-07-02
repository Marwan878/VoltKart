import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetOrders, resetOrderStatus } from "@store/orders/ordersSlice";
import { useEffect } from "react";

const useOrders = () => {
  const dispatch = useAppDispatch();

  const { loading, error } = useAppSelector((state) => state.orders);

  useEffect(() => {
    dispatch(actGetOrders());

    return () => {
      dispatch(resetOrderStatus());
    };
  }, [dispatch]);

  return {
    loading,
    error,
  };
};

export default useOrders;
