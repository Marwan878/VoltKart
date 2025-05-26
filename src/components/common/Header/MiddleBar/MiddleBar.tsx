import { Logo, Overlay } from "@components/ui";
import { getCartTotalQuantitySelector } from "@store/cart/cartSlice";
import { useAppSelector } from "@store/hooks";
import { Heart, Menu, Search, ShoppingCart, User2 } from "lucide-react";
import HeaderCounter from "../HeaderCounter/HeaderCounter";
import Searchbar from "../Searchbar";
import Sidebar from "../Sidebar/Sidebar";

import style from "../style.module.css";

export default function MiddleBar({
  sidebarOpen,
  onSidebarOpen,
  onSidebarClose,
}: {
  sidebarOpen: boolean;
  onSidebarOpen: () => void;
  onSidebarClose: () => void;
}) {
  const wishlistTotalQuantity = useAppSelector(
    (state) => state.wishlist.itemsId.length
  );
  const cartTotalQuantity = useAppSelector(getCartTotalQuantitySelector);

  return (
    <nav className="container py-2 d-flex justify-content-between align-items-center">
      <Logo theme="dark" />
      <Sidebar open={sidebarOpen} onClose={onSidebarClose} />
      {sidebarOpen && <Overlay />}
      <div className="d-flex align-items-center">
        <Searchbar
          containerClassName="d-none d-lg-block"
          className="rounded-pill border-black"
        />
      </div>
      <div className={style.rightContainer}>
        <a href="#" aria-label="Search" className="d-none d-md-inline">
          <Search />
        </a>
        <a href="#" aria-label="Your account." className="d-none d-md-inline">
          <User2 />
        </a>
        <a href="#" aria-label="Your wishlist.">
          <HeaderCounter
            to="wishlist"
            totalQuantity={wishlistTotalQuantity}
            icon={<Heart aria-hidden />}
          />
        </a>
        <a href="#" aria-label="Your cart.">
          <HeaderCounter
            to="cart"
            totalQuantity={cartTotalQuantity}
            icon={<ShoppingCart aria-hidden />}
          />
        </a>
        <button
          className="d-md-none"
          onClick={onSidebarOpen}
          aria-label="Open sidebar."
        >
          <Menu aria-hidden />
        </button>
      </div>
    </nav>
  );
}
