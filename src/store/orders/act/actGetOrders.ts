import { supabase } from "@lib/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";

const actGetOrders = createAsyncThunk(
  "orders/actGetOrders",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) {
        throw new Error(authError.message);
      }

      if (!user) {
        throw new Error("User not found");
      }

      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .eq("user_id", user.id);

      if (error) return rejectWithValue(error);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default actGetOrders;
