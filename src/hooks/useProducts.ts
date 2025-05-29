import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductsByCategory,
  cleanUpProductsRecords,
} from "@store/products/productsSlice";

const useProducts = () => {
  const { category } = useParams() as { category: string };

  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);

  const cartItems = useAppSelector((state) => state.cart.items);
  const wishListItemsId = useAppSelector((state) => state.wishlist.itemsId);
  const userAccessToken = useAppSelector((state) => state.auth.accessToken);

  useEffect(() => {
    const promise = dispatch(actGetProductsByCategory(category));

    return () => {
      dispatch(cleanUpProductsRecords());
      promise.abort();
    };
  }, [dispatch, category]);

  const productsFullInfo = records.map((record) => ({
    ...record,
    quantity: cartItems[record.id],
    isLiked: wishListItemsId.includes(record.id),
    isAuthenticated: !!userAccessToken,
  }));

  return { loading, error, productsFullInfo, category };
};

export default useProducts;
