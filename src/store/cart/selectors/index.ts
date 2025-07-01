import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store";

const getCartTotalQuantitySelector = createSelector(
  (state: RootState) => state.cart.products,
  (items) => {
    const totalQuantity = Object.values(items).reduce(
      (accumulator, currentValue) => {
        return accumulator + (currentValue?.quantity ?? 0);
      },
      0
    );
    return totalQuantity;
  }
);

export { getCartTotalQuantitySelector };
