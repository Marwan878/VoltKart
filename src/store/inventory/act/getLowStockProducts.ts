import { supabase } from "@lib/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TLowStockProduct, TProductOptionCombination } from "@types";

const getLowStockProducts = createAsyncThunk(
  "inventory/getLowStockProducts",
  async (_, thunkAPI) => {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("id, optionCombinations");

      if (error) {
        throw new Error(error.message);
      }

      const lowStockProducts: TLowStockProduct[] = data
        .flatMap((product) => {
          return product.optionCombinations.map(
            (optionCombination: TProductOptionCombination) => {
              if (optionCombination.stock < 10) {
                return {
                  id: product.id,
                  sku: optionCombination.sku,
                  stock: optionCombination.stock,
                };
              }

              return null;
            }
          );
        })
        .filter(Boolean);

      return lowStockProducts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export default getLowStockProducts;
