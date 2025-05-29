import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByCategory from "./act/actGetProductsByCategory";
import { TProduct, TLoading, isString } from "@types";

const initialState: {
  records: TProduct[];
  loading: TLoading;
  error: string | null;
} = {
  records: [],
  loading: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    cleanUpProductsRecords: (state) => {
      state.records = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProductsByCategory.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductsByCategory.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actGetProductsByCategory.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export const { cleanUpProductsRecords } = productsSlice.actions;
export { actGetProductsByCategory };
export default productsSlice.reducer;
