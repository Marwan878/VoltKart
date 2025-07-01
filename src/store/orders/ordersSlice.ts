import { createSlice } from "@reduxjs/toolkit";
import placeOrder from "./act/placeOrder";
import actGetOrders from "./act/actGetOrders";
import { TLoading, TOrderItem, isString } from "@types";

interface IOrderSlice {
  products: TOrderItem[];
  loading: TLoading;
  error: string | null;
}

const initialState: IOrderSlice = {
  products: [],
  loading: "idle",
  error: null,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    resetOrderStatus: (state) => {
      state.loading = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // place order
    builder.addCase(placeOrder.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(placeOrder.fulfilled, (state) => {
      state.loading = "succeeded";
    });
    builder.addCase(placeOrder.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });

    // get orders
    builder.addCase(actGetOrders.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetOrders.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.products = action.payload;
    });
    builder.addCase(actGetOrders.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { placeOrder, actGetOrders };

export const { resetOrderStatus } = orderSlice.actions;

export default orderSlice.reducer;
