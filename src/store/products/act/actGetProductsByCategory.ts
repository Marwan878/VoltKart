import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "@lib/supabase";
import { TProduct } from "@types";

const actGetProductsByCategory = createAsyncThunk(
  "products/actGetProductsByCategory",
  async (category: string, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;

    try {
      const controller = new AbortController();
      signal.addEventListener("abort", () => controller.abort());

      const { data, error } = await supabase
        .from("products")
        .select("*")
        .contains("categories", [category])
        .abortSignal(controller.signal);

      if (error) throw new Error(error.message);

      return data as TProduct[];
    } catch (error) {
      return rejectWithValue(error || "Failed to fetch products");
    }
  }
);

export default actGetProductsByCategory;
