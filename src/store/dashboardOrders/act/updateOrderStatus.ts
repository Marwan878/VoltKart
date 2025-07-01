import { supabase } from "@lib/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { TOrderStatus } from "@types";

type UpdateOrderStatusParams = {
  orderId: string;
  status: TOrderStatus;
};

export const updateOrderStatus = createAsyncThunk(
  "dashboardOrders/updateOrderStatus",
  async ({ orderId, status }: UpdateOrderStatusParams, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    if (!orderId || !status) {
      throw new Error("Order ID and status are required");
    }

    try {
      const { data, error } = await supabase
        .from("orders")
        .update({ status })
        .eq("id", orderId);

      if (error) {
        throw new Error(error.message);
      }

      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);
