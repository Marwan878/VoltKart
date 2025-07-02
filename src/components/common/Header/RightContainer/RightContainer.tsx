import { getCartTotalQuantitySelector } from "@store/cart/cartSlice";
import { useAppSelector } from "@store/hooks";
import { Heart, LogIn, ShoppingCart, User2, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import HeaderCounter from "../HeaderCounter/HeaderCounter";

import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { supabase } from "@lib/supabase";

export default function RightContainer() {
  const wishlistTotalQuantity = useAppSelector(
    (state) => state.wishlist.productIds.length
  );
  const cartTotalQuantity = useAppSelector(getCartTotalQuantitySelector);
  const [session, setSession] = useState(false);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        console.error(error);
      }

      setSession(!!data.user);
    })();
  }, []);

  return (
    <div className={styles.rightContainer}>
      {session ? (
        <>
          <Link to="/account" aria-label="Your account." className="">
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
          <Link to="/login" className="d-flex gap-2">
            <LogIn aria-hidden />
            <span className="">Log in</span>
          </Link>
          <Link to="/register" className="d-flex gap-2">
            <UserPlus aria-hidden />
            <span className="d-none d-lg-inline">Register</span>
          </Link>
        </div>
      )}
    </div>
  );
}
