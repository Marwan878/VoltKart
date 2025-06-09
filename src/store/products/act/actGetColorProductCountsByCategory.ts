import { supabase } from "@lib/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TProductOptionCombination } from "@types";

const actGetColorProductCountsByCategory = createAsyncThunk(
  "products/actGetColorProductCountsByCategory",
  async (category: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data: products, error } = await supabase
        .from("products")
        .select("optionCombinations")
        .contains("categories", [category]);

      if (error) throw new Error(error.message);

      const colorCounts: Record<string, number> = {};

      products?.forEach((product) => {
        const uniqueColors = new Set<string>();

        product.optionCombinations.forEach(
          (combination: TProductOptionCombination) => {
            if (
              combination.color?.name &&
              !uniqueColors.has(combination.color.name)
            ) {
              colorCounts[combination.color.name] =
                (colorCounts[combination.color.name] ?? 0) + 1;
              uniqueColors.add(combination.color.name);
            }
          }
        );
      });

      return colorCounts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default actGetColorProductCountsByCategory;
