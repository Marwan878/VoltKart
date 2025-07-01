import useScreenBreakpoint from "@hooks/useScreenBreakpoint";
import DesktopCartItemList from "./DesktopCartItemList";
import MobileCartItemList from "./MobileCartItemList";

import { TCartItemForState } from "@types";

type CartItemListProps = {
  cartItems: TCartItemForState[];
};

const CartItemList = ({ cartItems }: Readonly<CartItemListProps>) => {
  const belowBreakpoint = useScreenBreakpoint("md");

  return belowBreakpoint ? (
    <MobileCartItemList cartItems={cartItems} />
  ) : (
    <DesktopCartItemList cartItems={cartItems} />
  );
};

export default CartItemList;
