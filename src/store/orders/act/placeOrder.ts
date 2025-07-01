import { supabase } from "@lib/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const placeOrder = createAsyncThunk(
  "orders/placeOrder",
  async (subtotal: number, { rejectWithValue }) => {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) throw new Error("You must be logged in to place an order");

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
      return rejectWithValue(
        error instanceof Error ? error.message : "Unknown error"
      );
    }
  }
);

export default placeOrder;
