import { TProduct } from "@types";
import { createContext, ReactNode, useContext } from "react";
import RemoveFromWishlistButton from "./RemoveFromWishlistButton";
import ProductImage from "./ProductImage";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";
import StockStatus from "./StockStatus";

type WishlistContext = {
  product: TProduct | undefined;
};

const WishlistContext = createContext<WishlistContext>({
  product: undefined,
});

export default function WishlistProduct({
  children,
  product,
}: Readonly<{
  children: ReactNode;
  product: TProduct;
}>) {
  return (
    <WishlistContext.Provider value={{ product }}>
      {children}
    </WishlistContext.Provider>
  );
}

WishlistProduct.ProductImage = ProductImage;
WishlistProduct.ProductName = ProductName;
WishlistProduct.RemoveFromWishlistButton = RemoveFromWishlistButton;
WishlistProduct.ProductPrice = ProductPrice;
WishlistProduct.StockStatus = StockStatus;

export const useWishlistContext = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error(
      "useWishlistContext must be used within a WishlistProvider"
    );
  }
  return context;
};
