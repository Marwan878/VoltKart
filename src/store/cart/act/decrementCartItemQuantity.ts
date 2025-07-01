import { createAsyncThunk } from "@reduxjs/toolkit";
import { TCartItemForState } from "@types";
import { decrementLocalCartItemQuantity } from "../cartSlice";
import { supabase } from "@lib/supabase";

type DecrementCartItemQuantityProps = {
  readonly cartItem: TCartItemForState;
  readonly quantity: number;
};

const decrementCartItemQuantity = createAsyncThunk(
  "cart/decrementCartItemQuantity",
  async ({ cartItem, quantity }: DecrementCartItemQuantityProps, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;

    try {
      const { data: userData } = await supabase.auth.getUser();
      const userId = userData.user?.id;
      if (!userId) throw new Error("User not found.");

      if (cartItem.quantity - quantity < 0) {
        throw new Error("Can't decrement quantity below 0.");
      }

      if (cartItem.quantity - quantity === 0) {
        const { error } = await supabase
          .from("cart_items")
          .delete()
          .eq("sku", cartItem.sku)
          .eq("user_id", userId)
          .eq("product_id", cartItem.product.id);

        if (error) throw new Error(error.message);
      } else {
        const { error } = await supabase
          .from("cart_items")
          .update({
            quantity: cartItem.quantity - quantity,
          })
          .eq("sku", cartItem.sku)
          .eq("user_id", userId)
          .eq("product_id", cartItem.product.id);

        if (error) throw new Error(error.message);
      }

      dispatch(decrementLocalCartItemQuantity({ cartItem, quantity }));
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default decrementCartItemQuantity;
