import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetWishlist,
  cleanWishlistProductsFullInfo,
} from "@store/wishlist/wishlistSlice";

const useWishlist = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.wishlist);

  useEffect(() => {
    dispatch(actGetWishlist());
    return () => {
      dispatch(cleanWishlistProductsFullInfo());
    };
  }, [dispatch]);

  return { records, loading, error };
};

export default useWishlist;
