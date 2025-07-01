import { supabase } from "@lib/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getDeals = createAsyncThunk("deals/getDeals", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const { data, error } = await supabase
      .from("deals")
      .select(`*, product:product_id (*)`);

    if (error) throw new Error(error.message);

    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export default getDeals;
