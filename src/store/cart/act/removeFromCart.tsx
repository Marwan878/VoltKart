import { supabase } from "@lib/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { addToast } from "@store/toasts/toastsSlice";
import { removeLocalCartItem } from "../cartSlice";

import { TCartItemForState } from "@types";

const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async ({ cartItem }: { cartItem: TCartItemForState }, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI;

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user?.id) {
        throw new Error("User not found, please login to continue");
      }

      const { error } = await supabase
        .from("cart_items")
        .delete()
        .eq("product_id", cartItem.product_id)
        .eq("user_id", user.id)
        .eq("sku", cartItem.sku);

      if (error) {
        throw new Error(error.message);
      }

      dispatch(removeLocalCartItem({ cartItem }));

      dispatch(
        addToast({
          message: "Product removed from cart",
          type: "success",
          title: "Success",
        })
      );
    } catch (error) {
      dispatch(
        addToast({
          message:
            error instanceof Error
              ? error.message
              : "An unknown error occurred",
          type: "danger",
          title: "Error",
        })
      );
      return rejectWithValue(error);
    }
  }
);

export default removeFromCart;
