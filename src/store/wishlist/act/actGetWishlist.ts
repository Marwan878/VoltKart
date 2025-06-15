import { supabase } from "@lib/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";

const actGetWishlist = createAsyncThunk(
  "wishlist/actGetWishlist",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const { data: userData } = await supabase.auth.getUser();
      const userId = userData.user?.id;

      if (!userId) {
        return rejectWithValue("You must be logged in to view your wishlist");
      }

      const { data, error } = await supabase
        .from("wishlist_items")
        .select(
          `
        *,
        product:product_id (*)
      `
        )
        .eq("user_id", userId);

      console.log(data);

      if (error) {
        return rejectWithValue(error);
      }

      return data.map((data) => data.product);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default actGetWishlist;
