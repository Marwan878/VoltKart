import useSession from "@hooks/useSession";
import { getCartProducts } from "@store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { getWishlist } from "@store/wishlist/wishlistSlice";
import { Heart, LogIn, ShoppingCart, User2, UserPlus } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderCounter from "../HeaderCounter/HeaderCounter";

import styles from "./styles.module.css";

export default function RightContainer() {
  const wishlistTotalQuantity = useAppSelector(
    (state) => state.wishlist.productIds.length
  );

  const cartTotalQuantity = useAppSelector(
    (state) => state.cart.cartItemsIdentifiers.length
  );

  const { session, loading } = useSession();

  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      dispatch(getCartProducts());
      dispatch(getWishlist());
    }
  }, [dispatch, user]);

  if (loading) {
    return null;
  }

  return (
    <div className={styles.rightContainer}>
      {session ? (
        <>
          <Link to="/account/orders" aria-label="Your account.">
            <User2 aria-hidden />
          </Link>
          <Link to="/wishlist" aria-label="Your wishlist.">
            <HeaderCounter
              to="wishlist"
              totalQuantity={wishlistTotalQuantity}
              icon={<Heart aria-hidden />}
            />
          </Link>
          <Link to="/cart" aria-label="Your cart.">
            <HeaderCounter
              to="cart"
              totalQuantity={cartTotalQuantity}
              icon={<ShoppingCart aria-hidden />}
            />
          </Link>
        </>
      ) : (
        <div className="d-flex gap-4">
          <Link to="/login" className="d-flex gap-2" aria-label="Log in.">
            <LogIn aria-hidden />
            <span className="">Log in</span>
          </Link>
          <Link to="/register" className="d-flex gap-2" aria-label="Register.">
            <UserPlus aria-hidden />
            <span className="">Register</span>
          </Link>
        </div>
      )}
    </div>
  );
}
