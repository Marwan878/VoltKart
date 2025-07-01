import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "@lib/supabase";

export const actAuthLogout = createAsyncThunk(
  "auth/actAuthLogout",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error.message;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
