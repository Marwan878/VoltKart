import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetWishlist } from "@store/wishlist/wishlistSlice";
import { useEffect, useState } from "react";
import BottomBar from "./BottomBar/BottomBar";
import MiddleBar from "./MiddleBar/MiddleBar";

export default function Header() {
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector((state) => state.auth);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (accessToken) {
      dispatch(actGetWishlist("ProductIds"));
    }
  }, [dispatch, accessToken]);

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <header className="mb-5">
      <MiddleBar
        sidebarOpen={sidebarOpen}
        onSidebarOpen={handleSidebarOpen}
        onSidebarClose={handleSidebarClose}
      />
      <BottomBar onSidebarOpen={handleSidebarOpen} />
    </header>
  );
}
