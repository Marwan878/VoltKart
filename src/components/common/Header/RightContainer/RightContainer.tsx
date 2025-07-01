import { getCartTotalQuantitySelector } from "@store/cart/cartSlice";
import { useAppSelector } from "@store/hooks";
import { Heart, Menu, ShoppingCart, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import HeaderCounter from "../HeaderCounter/HeaderCounter";

import styles from "./styles.module.css";

type RightContainerProps = {
  onSidebarOpen: () => void;
};

export default function RightContainer({
  onSidebarOpen,
}: Readonly<RightContainerProps>) {
  const wishlistTotalQuantity = useAppSelector(
    (state) => state.wishlist.productIds.length
  );
  const cartTotalQuantity = useAppSelector(getCartTotalQuantitySelector);
  const { accessToken } = useAppSelector((state) => state.auth);

  return (
    <div className={styles.rightContainer}>
      {accessToken && (
        <>
          <Link
            to="/account"
            aria-label="Your account."
            className="d-none d-md-inline"
          >
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
      )}

      <button
        className="d-md-none"
        onClick={onSidebarOpen}
        aria-label="Open sidebar."
      >
        <Menu aria-hidden />
      </button>
    </div>
  );
}
