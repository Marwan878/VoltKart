import { createContext, ReactNode, useContext } from "react";
import ProductImage from "./ProductImage";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";
import ProductQuantitySelector from "./ProductQuantitySelector";
import RemoveFromCartButton from "./RemoveFromCartButton";
import RemoveFromWishlistButton from "./RemoveFromWishlistButton";
import StockStatus from "./StockStatus";

import { TProduct } from "@types";

type RowProductContext = {
  product: TProduct | undefined;
};

const RowProductContext = createContext<RowProductContext>({
  product: undefined,
});

export default function RowProduct({
  children,
  product,
}: Readonly<{
  children: ReactNode;
  product: TProduct;
}>) {
  return (
    <RowProductContext.Provider value={{ product }}>
      {children}
    </RowProductContext.Provider>
  );
}

RowProduct.ProductImage = ProductImage;
RowProduct.ProductName = ProductName;
RowProduct.RemoveFromWishlistButton = RemoveFromWishlistButton;
RowProduct.ProductPrice = ProductPrice;
RowProduct.StockStatus = StockStatus;
RowProduct.QuantitySelector = ProductQuantitySelector;
RowProduct.RemoveFromCartButton = RemoveFromCartButton;

export const useRowProductContext = () => {
  const context = useContext(RowProductContext);
  if (!context) {
    throw new Error(
      "useRowProductContext must be used within a RowProductProvider"
    );
  }
  return context;
};
