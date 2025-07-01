import { supabase } from "@lib/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { addToast } from "@store/toasts/toastsSlice";
import { toggleLocalWishlist } from "../wishlistSlice";

const toggleWishlist = createAsyncThunk(
  "wishlist/toggleWishlist",
  async (id: string, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) throw new Error("Please login to toggle wishlist.");

      const { status } = await supabase
        .from("wishlist_items")
        .select("*")
        .eq("user_id", userData.user.id)
        .eq("product_id", id)
        .single();

      if (status === 500)
        throw new Error("Something went wrong, please try again later.");
      if (status === 400)
        throw new Error("Invalid request, please contact support.");

      const itemAlreadyWishlisted = status === 200;

      if (!itemAlreadyWishlisted) {
        const { error } = await supabase
          .from("wishlist_items")
          .insert({ user_id: userData.user.id, product_id: id })
          .select();

        if (error) throw new Error(error.message);
      } else {
        const { error } = await supabase
          .from("wishlist_items")
          .delete()
          .eq("user_id", userData.user.id)
          .eq("product_id", id);

        if (error) throw new Error(error.message);
      }

      const toastMessage = itemAlreadyWishlisted
        ? "Product removed from wishlist successfully."
        : "Product added to wishlist successfully.";

      const toastTitle = itemAlreadyWishlisted
        ? "Removed from wishlist"
        : "Added to wishlist";

      dispatch(toggleLocalWishlist(id));

      dispatch(
        addToast({
          title: toastTitle,
          message: toastMessage,
          type: "success",
        })
      );
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

export default toggleWishlist;
