import { supabase } from "@lib/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";

const placeOrder = createAsyncThunk(
  "orders/placeOrder",
  async (subtotal: number, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const { data: userData } = await supabase.auth.getUser();
      const userId = userData.user?.id;

      if (!userId) {
        throw new Error("You must be logged in to place an order");
      }

      const res = await fetch(
        "https://hztavlzsfgsmofrmdqex.functions.supabase.co/create-checkout-session",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: subtotal * 100 }),
        }
      );

      const data = await res.json();
      window.location.href = data.url;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default placeOrder;
