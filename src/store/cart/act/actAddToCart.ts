import { supabase } from "@lib/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import { TCartItem } from "@types/cart.types";
import { TProduct } from "@types/product.types";

const actAddToCart = createAsyncThunk(
  "cart/actAddToCart",
  async (
    {
      productId,
      sku,
      quantity,
    }: { productId: string; sku: string | undefined; quantity: number },
    thunkAPI
  ) => {
    const { rejectWithValue, getState } = thunkAPI;

    if (!productId) return rejectWithValue("Product ID is required");
    if (!sku) return rejectWithValue("SKU is required");
    if (quantity <= 0)
      return rejectWithValue("Quantity must be greater than 0");

    const { auth } = getState() as RootState;
    if (!auth) return rejectWithValue("You must be logged in");

    try {
      const itemAlreadyInCart = (await supabase
        .from("cart_items")
        .select("*")
        .eq("user_id", auth)
        .eq("product_id", productId)
        .single()) as unknown as TCartItem[];

      const { error } = await supabase.from("cart_items").insert([
        {
          user_id: auth,
          product_id: productId,
          sku,
          quantity,
        },
      ]);

      if (error) return rejectWithValue(error.message);
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export default actAddToCart;
