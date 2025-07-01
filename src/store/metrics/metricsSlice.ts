import { TIME_FILTERS } from "@constants";
import getMetrics from "@store/metrics/act/getMetrics";
import { createSlice } from "@reduxjs/toolkit";

import { TLoading } from "@types";

type TMetricsState = {
  activeFilter: (typeof TIME_FILTERS)[number];
  loading: TLoading;
  error: string | null;
  totalRevenue: number;
  newClientsCount: number;
  ordersPlaced: number;
  avgOrderRate: number;
  timeToRevenue: { time: string; revenue: number }[];
  timeToOrders: { time: string; orders: number }[];
};

const initialState: TMetricsState = {
  activeFilter: TIME_FILTERS[0],
  loading: "idle",
  error: null,
  totalRevenue: 0,
  newClientsCount: 0,
  ordersPlaced: 0,
  avgOrderRate: 0,
  timeToRevenue: [],
  timeToOrders: [],
};

const metricsSlice = createSlice({
  name: "metrics",
  initialState,
  reducers: {
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMetrics.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getMetrics.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.totalRevenue = action.payload.totalRevenue;
      state.newClientsCount = action.payload.newClientsCount;
      state.ordersPlaced = action.payload.ordersPlaced;
      state.avgOrderRate = action.payload.avgOrderRate;
      state.timeToRevenue = action.payload.timeToRevenue;
      state.timeToOrders = action.payload.timeToOrders;
    });
    builder.addCase(getMetrics.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message ?? "Something went wrong";
    });
  },
});

export const { setActiveFilter } = metricsSlice.actions;
export default metricsSlice.reducer;
