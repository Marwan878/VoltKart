import { createSlice } from "@reduxjs/toolkit";
import { TProduct, TLoading } from "@types";
import getDeals from "./act/getDeals";

type DealsType = {
  products: TProduct[];
  error: string | null;
  loading: TLoading;
};

const initialState: DealsType = {
  products: [],
  error: null,
  loading: "idle",
};

const dealsSlice = createSlice({
  name: "deals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDeals.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getDeals.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(getDeals.rejected, (state, action) => {
      state.error = action.payload as string;
      state.loading = "failed";
    });
  },
});

export default dealsSlice.reducer;
