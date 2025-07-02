import { supabase } from "@lib/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { addToast } from "@store/toasts/toastsSlice";

import { TOrderItem, TOrderStatus } from "@types";

export type GetOrdersPayload = {
  pageIndex: number;
  limit: number;
  sortOrder: "asc" | "desc";
  status: TOrderStatus | "";
  orderId: string;
};

export const getOrders = createAsyncThunk(
  "dashboardOrders/getOrders",
  async (
    payload: GetOrdersPayload,
    thunkAPI
  ): Promise<{ data: TOrderItem[]; count: number }> => {
    const { rejectWithValue, dispatch } = thunkAPI;

    try {
      const query = supabase.from("orders").select("*", { count: "exact" });

      // if orderId is provided, get the order by orderId and nothing else
      if (payload.orderId) {
        const uuidRegex =
          /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

        if (!uuidRegex.test(payload.orderId)) {
          return { count: 0, data: [] };
        }

        query.eq("id", payload.orderId);
      } else {
        if (payload.status) {
          query.eq("status", payload.status);
        }
        if (payload.sortOrder) {
          query.order("created_at", { ascending: payload.sortOrder === "asc" });
        }

        query.range(
          payload.pageIndex * payload.limit,
          (payload.pageIndex + 1) * payload.limit - 1
        );
      }

      const { data, error, count } = await query;

      if (error) {
        throw new Error(error.message);
      }

      return { data, count: count ?? 0 };
    } catch (error) {
      console.error(error);
      dispatch(
        addToast({
          message: "Error fetching orders",
          type: "danger",
        })
      );
      return rejectWithValue("Error in fetching orders.");
    }
  }
);
