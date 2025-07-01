import { supabase } from "@lib/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { incrementLocalCartItemQuantity } from "../cartSlice";
import { RootState } from "@store/index";

type IncrementCartItemQuantityProps = {
  productId: string;
  sku: string;
  quantity: number;
  maxOrderQuantity: number;
  stock: number;
};

const incrementCartItemQuantity = createAsyncThunk(
  "cart/incrementCartItemQuantity",
  async (
    {
      productId,
      sku,
      quantity,
      maxOrderQuantity,
      stock,
    }: Readonly<IncrementCartItemQuantityProps>,
    thunkAPI
  ) => {
    const { rejectWithValue, dispatch, getState } = thunkAPI;

    try {
      if (quantity <= 0) throw new Error("Quantity must be greater than 0.");

      const { cart } = getState() as RootState;
      const cartItem = cart.products.find(
        (item) => item.product_id === productId && item.sku === sku
      );

      if (!cartItem) {
        throw new Error(
          "Attempted to increment quantity of a non-existent cart item."
        );
      }

      if (cartItem.quantity + quantity > stock) {
        throw new Error(
          "Attempted to increment quantity of cart item above stock."
        );
      }

      if (cartItem.quantity + quantity > maxOrderQuantity) {
        throw new Error(
          "Attempted to increment quantity of cart item above max order quantity."
        );
      }

      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        throw new Error(
          "Attempted to increment cart quantity for a non-authenticated user."
        );
      }

      const { error } = await supabase
        .from("cart_items")
        .update({
          quantity: cartItem.quantity + quantity,
        })
        .eq("sku", sku)
        .eq("user_id", user.id)
        .eq("product_id", productId);

      if (error) throw new Error(error.message);

      dispatch(
        incrementLocalCartItemQuantity({
          productId,
          sku,
          quantity,
          maxOrderQuantity,
          stock,
        })
      );
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default incrementCartItemQuantity;
