import { supabase } from "@lib/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TCartItem } from "@types";

const getCartProducts = createAsyncThunk(
  "cart/getCartProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    const { data: userData } = await supabase.auth.getUser();
    const userId = userData.user?.id;

    if (!userId) {
      throw new Error("You must be logged in to view your cart");
    }

    try {
      const { data, error } = await supabase
        .from("cart_items")
        .select(
          `
            *,
            product:cart_items_product_id_fkey (*)
          `
        )
        .eq("user_id", userId);

      if (error) throw new Error(error.message);

      const cartProducts: TCartItem[] = data;

      return cartProducts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default getCartProducts;
