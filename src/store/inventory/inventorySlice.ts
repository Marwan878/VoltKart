import { createSlice } from "@reduxjs/toolkit";
import getLowStockProducts from "./act/getLowStockProducts";

import { TLowStockProduct } from "@types";

type InventoryState = {
  error: string | null;
  lowStockProducts: TLowStockProduct[];
  loading: "idle" | "pending" | "succeeded" | "failed";
};

const initialState: InventoryState = {
  error: null,
  lowStockProducts: [],
  loading: "idle",
};

export const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLowStockProducts.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getLowStockProducts.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.lowStockProducts = action.payload;
    });
    builder.addCase(getLowStockProducts.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message ?? "Something went wrong";
    });
  },
});

export default inventorySlice.reducer;
