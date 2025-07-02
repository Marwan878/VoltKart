import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TOrderItem, TOrderStatus } from "@types";
import { getOrders } from "./act/getOrders";

type TDashboardOrdersState = {
  orders: TOrderItem[];
  loading: boolean;
  error: string | null;
  currentPageIndex: number;
  itemsPerPage: number;
  searchOrderId: string;
  statusFilter: TOrderStatus | "";
  sortOrder: "asc" | "desc";
  totalOrders: number;
};

const initialState: TDashboardOrdersState = {
  orders: [],
  loading: false,
  error: null,
  currentPageIndex: 0,
  itemsPerPage: 10,
  searchOrderId: "",
  statusFilter: "",
  sortOrder: "desc",
  totalOrders: 0,
};

const dashboardOrdersSlice = createSlice({
  name: "dashboardOrders",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPageIndex = action.payload;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
      state.currentPageIndex = 0;
    },
    setSearchOrderId: (state, action: PayloadAction<string>) => {
      state.searchOrderId = action.payload;
      state.currentPageIndex = 0;
    },
    setStatusFilter: (state, action: PayloadAction<TOrderStatus | "">) => {
      state.statusFilter = action.payload;
      state.currentPageIndex = 0;
    },
    setSortOrder: (state, action: PayloadAction<"asc" | "desc">) => {
      state.sortOrder = action.payload;
    },
    clearFilters: (state) => {
      state.searchOrderId = "";
      state.statusFilter = "";
      state.sortOrder = "desc";
      state.currentPageIndex = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload.data;
        state.error = null;
        state.totalOrders = action.payload.count;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch orders";
      });
  },
});

export const {
  setCurrentPage,
  setItemsPerPage,
  setSearchOrderId,
  setStatusFilter,
  setSortOrder,
  clearFilters,
} = dashboardOrdersSlice.actions;

export default dashboardOrdersSlice.reducer;
