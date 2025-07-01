import { supabase } from "@lib/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";

const actGetBrandProductCountsByCategory = createAsyncThunk(
  "products/actGetBrandProductCountsByCategory",
  async (categoryId: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data: products, error } = await supabase
        .from("products")
        .select("brand")
        .eq("categoryId", categoryId);

      if (error) throw new Error(error.message);

      const brandCounts: Record<string, number> = {};

      products?.forEach((product) => {
        const brand = product.brand;
        brandCounts[brand] = (brandCounts[brand] || 0) + 1;
      });

      return brandCounts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default actGetBrandProductCountsByCategory;
