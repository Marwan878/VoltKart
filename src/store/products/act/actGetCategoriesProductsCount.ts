import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "@lib/supabase";
import { TProduct } from "@types";

const actGetCategoriesProductsCount = createAsyncThunk(
  "products/actGetCategoriesProductsCount",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const { data: products, error } = await supabase
        .from("products")
        .select("*");

      if (error) throw new Error(error.message);

      const categoryCounts: Record<string, number> = {};

      products?.forEach((product: TProduct) => {
        categoryCounts[product.categoryId] =
          (categoryCounts[product.categoryId] ?? 0) + 1;
      });

      return categoryCounts;
    } catch (error) {
      rejectWithValue(error);
      return {};
    }
  }
);

export default actGetCategoriesProductsCount;
