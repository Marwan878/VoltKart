import { createSlice } from "@reduxjs/toolkit";
import { actAuthLogout } from "@store/auth/authSlice";
import getWishlist from "./act/getWishlist";
import toggleWishlist from "./act/toggleWishlist";

import { TLoading, TProduct, isString } from "@types";

interface IWishlist {
  productIds: string[];
  records: TProduct[];
  error: null | string;
  loading: TLoading;
}

const initialState: IWishlist = {
  productIds: [],
  records: [],
  error: null,
  loading: "idle",
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleLocalWishlist: (state, action) => {
      if (state.productIds.includes(action.payload)) {
        state.productIds = state.productIds.filter(
          (id) => id !== action.payload
        );

        state.records = state.records.filter(
          (record) => record.id !== action.payload
        );
      } else {
        state.productIds.push(action.payload);
      }
    },
    cleanWishlistProductsFullInfo: (state) => {
      state.records = [];
    },
    setWishlistItemsIdentifiers: (state, action) => {
      state.productIds = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(toggleWishlist.pending, (state) => {
      state.error = null;
    });
    builder.addCase(toggleWishlist.fulfilled, (state) => {
      state.loading = "succeeded";
    });
    builder.addCase(toggleWishlist.rejected, (state, action) => {
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
    // get wishlist items
    builder.addCase(getWishlist.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(getWishlist.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(getWishlist.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });

    builder.addCase(actAuthLogout.fulfilled, (state) => {
      state.productIds = [];
      state.records = [];
    });
  },
});

export { getWishlist, toggleWishlist };
export const {
  cleanWishlistProductsFullInfo,
  toggleLocalWishlist,
  setWishlistItemsIdentifiers,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;
