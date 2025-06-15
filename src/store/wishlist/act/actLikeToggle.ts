import { createAsyncThunk } from "@reduxjs/toolkit";

const actLikeToggle = createAsyncThunk(
  "wishlist/actLikeToggle",
  async (id: string | undefined, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
    } catch (error) {}
  }
);

export default actLikeToggle;
