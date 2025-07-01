import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByCategory from "./act/actGetProductsByCategory";
import actGetCategoriesProductsCount from "./act/actGetCategoriesProductsCount";
import { TProduct, TLoading, isString } from "@types";
import { CATEGORIES } from "@constants";
import actGetBrandProductCountsByCategory from "./act/actGetBrandProductCountsByCategory";
import actGetColorProductCountsByCategory from "./act/actGetColorProductCountsByCategory";

const initialState: {
  records: TProduct[];
  loading: TLoading;
  error: string | null;
  categoriesProductsCount: Record<string, number>;
  brandsProductsCount: Record<string, number>;
  colorsProductsCount: Record<string, number>;
} = {
  records: [],
  loading: "idle",
  error: null,
  categoriesProductsCount: Object.fromEntries(
    CATEGORIES.map((category) => [category.id, 0])
  ),
  brandsProductsCount: {},
  colorsProductsCount: {},
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
    builder.addCase(actGetCategoriesProductsCount.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(
      actGetCategoriesProductsCount.fulfilled,
      (state, action) => {
        state.loading = "succeeded";
        state.categoriesProductsCount = action.payload;
      }
    );
    builder.addCase(actGetCategoriesProductsCount.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
    builder.addCase(actGetBrandProductCountsByCategory.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(
      actGetBrandProductCountsByCategory.fulfilled,
      (state, action) => {
        state.loading = "succeeded";
        state.brandsProductsCount = action.payload;
      }
    );
    builder.addCase(
      actGetBrandProductCountsByCategory.rejected,
      (state, action) => {
        state.loading = "failed";
        if (isString(action.payload)) {
          state.error = action.payload;
        }
      }
    );
    builder.addCase(actGetColorProductCountsByCategory.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(
      actGetColorProductCountsByCategory.fulfilled,
      (state, action) => {
        state.loading = "succeeded";
        state.colorsProductsCount = action.payload;
      }
    );
    builder.addCase(
      actGetColorProductCountsByCategory.rejected,
      (state, action) => {
        state.loading = "failed";
        if (isString(action.payload)) {
          state.error = action.payload;
        }
      }
    );
  },
});

export const { cleanUpProductsRecords } = productsSlice.actions;
export { actGetProductsByCategory };
export default productsSlice.reducer;
