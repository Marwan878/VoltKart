import { supabase } from "@lib/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import { addToast } from "@store/toasts/toastsSlice";
import { PostgrestError } from "@supabase/supabase-js";

import { TProductOptionCombination } from "@types";

export const placeOrder = createAsyncThunk(
  "orders/placeOrder",
  async (_, { rejectWithValue, getState, dispatch }) => {
    const {
      cart: { products },
    } = getState() as RootState;

    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) throw new Error("You must be logged in to place an order");

      let subtotal = 0;
      products.forEach(async (product) => {
        const {
          data: { optionCombinations },
          error,
        } = (await supabase
          .from("products")
          .select("optionCombinations")
          .eq("id", product.product_id)
          .single()) as unknown as {
          data: { optionCombinations: TProductOptionCombination[] };
          error: PostgrestError | null;
        };

        if (!optionCombinations) throw new Error("Product not found");

        if (error) throw new Error(error.message);

        const currentCombination = optionCombinations.find(
          (comination) => comination.sku === product.sku
        );

        if (!currentCombination)
          throw new Error("Product combination not found");

        if (currentCombination.stock < product.quantity) {
          throw new Error(
            `Not enough stock, please reduce the quantity of ${product.product.name} to ${currentCombination.stock}`
          );
        }

        subtotal += product.quantity * currentCombination.price.discounted;

        currentCombination.stock -= product.quantity;

        const { error: updateError } = await supabase
          .from("products")
          .update({ optionCombinations })
          .eq("id", product.product_id);

        if (updateError) throw new Error(updateError.message);
      });

      const { data, error } = await supabase.functions.invoke(
        "create-checkout-session",
        {
          body: {
            amount: subtotal * 100,
            customerId: session.user.id,
          },
        }
      );

      if (error) throw error;

      window.location.replace(data.url);
    } catch (error: unknown) {
      console.error(error);

      dispatch(
        addToast({
          title: "Error",
          message: error instanceof Error ? error.message : "Unknown error",
          type: "danger",
        })
      );

      return rejectWithValue(
        error instanceof Error ? error.message : "Unknown error"
      );
    }
  }
);

export default placeOrder;
