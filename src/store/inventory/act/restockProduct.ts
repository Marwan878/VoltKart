import { supabase } from "@lib/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import getLowStockProducts from "./getLowStockProducts";

import { TProductOptionCombination } from "@types";

type RestockProductPayload = {
  id: string;
  sku: string;
  restockAmount: number;
};

const restockProduct = createAsyncThunk(
  "inventory/restockProduct",
  async ({ id, sku, restockAmount }: RestockProductPayload, thunkAPI) => {
    try {
      const { data, error: fetchError } = await supabase
        .from("products")
        .select("optionCombinations")
        .eq("id", id)
        .single();

      if (fetchError) {
        throw new Error(fetchError.message);
      }

      const optionCombination = data.optionCombinations.find(
        (optionCombination: TProductOptionCombination) =>
          optionCombination.sku === sku
      );

      if (!optionCombination) {
        throw new Error("Option combination not found");
      }

      optionCombination.stock += restockAmount;

      const { error: updateError } = await supabase
        .from("products")
        .update({ optionCombinations: data.optionCombinations })
        .eq("id", id);

      if (updateError) {
        throw new Error(updateError.message);
      }

      thunkAPI.dispatch(getLowStockProducts());
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export default restockProduct;
