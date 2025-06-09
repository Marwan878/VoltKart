import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByItems from "./act/actGetProductsByItems";
import { getCartTotalQuantitySelector } from "./selectors";
import { TProduct, TLoading, isString } from "@types";

interface ICartState {
  products: TProduct[];
  loading: TLoading;
  error: null | string;
}

const initialState: ICartState = {
  products: [],
  loading: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, currentCombination } = action.payload;
      const productInCart = state.products.find((el) =>
        el.optionCombinations.find((el) => el.sku === currentCombination.sku)
      );

      if (productInCart) {
        productInCart.quantity = (productInCart.quantity ?? 0) + 1;
      } else {
        state.products.push({
          ...product,
          quantity: 1,
        });
      }
    },
    cartItemChangeQuantity: (state, action) => {
      const { currentCombination, quantity } = action.payload;
      const productInCart = state.products.find((el) =>
        el.optionCombinations.find((el) => el.sku === currentCombination.sku)
      );

      if (productInCart) {
        productInCart.quantity = quantity;
      }
    },
    cartItemRemove: (state, action) => {
      delete state.products[action.payload];
      state.products = state.products.filter((el) => el.id !== action.payload);
    },
    cleanCartProductsFullInfo: (state) => {
      state.products = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProductsByItems.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductsByItems.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.products = action.payload;
    });
    builder.addCase(actGetProductsByItems.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { getCartTotalQuantitySelector, actGetProductsByItems };

export const {
  addToCart,
  cartItemChangeQuantity,
  cartItemRemove,
  cleanCartProductsFullInfo,
} = cartSlice.actions;

export default cartSlice.reducer;
