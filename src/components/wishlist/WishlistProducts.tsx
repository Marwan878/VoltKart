import useScreenBreakpoint from "@hooks/useScreenBreakpoint";
import DesktopViewWishlist from "./DesktopViewWishlist";
import MobileViewWishlist from "./MobileViewWishlist";

export default function WishlistProducts() {
  const belowBreakpoint = useScreenBreakpoint("lg");

  return belowBreakpoint ? <MobileViewWishlist /> : <DesktopViewWishlist />;
}
