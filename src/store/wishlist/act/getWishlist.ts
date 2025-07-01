import { supabase } from "@lib/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import { addToast } from "@store/toasts/toastsSlice";

const getWishlist = createAsyncThunk(
  "wishlist/getWishlist",
  async (_, thunkAPI) => {
    const { rejectWithValue, dispatch, getState } = thunkAPI;

    try {
      const { data: userData } = await supabase.auth.getUser();
      const userId = userData.user?.id;

      if (!userId) {
        throw new Error("You must be logged in to view your wishlist");
      }

      const { productIds } = (getState() as RootState).wishlist;

      const { data, error } = await supabase
        .from("products")
        .select("*")
        .in("id", productIds);

      if (error) {
        throw new Error(error.message);
      }

      return data;
    } catch (error) {
      dispatch(
        addToast({
          title: "Error",
          message: "Something went wrong, please try again later.",
          type: "danger",
        })
      );
      return rejectWithValue(error);
    }
  }
);

export default getWishlist;
