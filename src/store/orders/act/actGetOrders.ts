import { supabase } from "@lib/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";

const actGetOrders = createAsyncThunk(
  "orders/actGetOrders",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { auth } = getState() as RootState;

    try {
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .eq("user_id", auth.user?.id);

      if (error) return rejectWithValue(error);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default actGetOrders;
