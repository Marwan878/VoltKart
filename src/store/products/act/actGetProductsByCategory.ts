import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "@lib/supabase";
import { TProduct } from "@types";

const actGetProductsByCategory = createAsyncThunk(
  "products/actGetProductsByCategory",
  async (categoryId: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("categoryId", categoryId);

      if (error) throw new Error(error.message);

      return data as TProduct[];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default actGetProductsByCategory;
