import { createAsyncThunk } from "@reduxjs/toolkit";

const actLikeToggle = createAsyncThunk(
  "wishlist/actLikeToggle",
  async (id: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
    } catch (error) {}
  }
);

export default actLikeToggle;
