import { getOrders } from "@store/dashboardOrders/act/getOrders";
import { updateOrderStatus } from "@store/dashboardOrders/act/updateOrderStatus";
import {
  clearFilters,
  setCurrentPage,
  setItemsPerPage,
  setSearchOrderId,
  setSortOrder,
  setStatusFilter,
} from "@store/dashboardOrders/dashboardOrdersSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useCallback, useEffect } from "react";

import { TOrderStatus } from "@types";
import { addToast } from "@store/toasts/toastsSlice";

export default function useOrders() {
  const dispatch = useAppDispatch();
  const {
    orders,
    loading,
    error,
    currentPageIndex,
    itemsPerPage,
    searchOrderId,
    statusFilter,
    sortOrder,
    totalOrders,
  } = useAppSelector((state) => state.dashboardOrders);

  const fetchOrders = useCallback(() => {
    dispatch(
      getOrders({
        pageIndex: currentPageIndex,
        limit: itemsPerPage,
        sortOrder,
        status: statusFilter,
        orderId: searchOrderId.trim(),
      })
    );
  }, [
    dispatch,
    currentPageIndex,
    itemsPerPage,
    sortOrder,
    statusFilter,
    searchOrderId,
  ]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const handleStatusChange = (orderId: string, status: TOrderStatus) => {
    dispatch(updateOrderStatus({ orderId: orderId.trim(), status }))
      .unwrap()
      .then(fetchOrders)
      .then(() =>
        dispatch(
          addToast({
            type: "success",
            message: "Order status has been updated successfully",
            title: "Success!",
          })
        )
      );
  };

  const handleSearch = () => {
    dispatch(setCurrentPage(0));
    fetchOrders();
  };

  return {
    setCurrentPage: (newPage: number) => dispatch(setCurrentPage(newPage)),
    currentPageIndex,
    totalOrders,
    itemsPerPage,
    orders,
    handleStatusChange,
    loading,
    error,
    search: handleSearch,
    searchOrderId,
    setSearchOrderId: (newSearchOrderId: string) =>
      dispatch(setSearchOrderId(newSearchOrderId)),
    statusFilter,
    setStatusFilter: (newStatusFilter: TOrderStatus | "") =>
      dispatch(setStatusFilter(newStatusFilter)),
    sortOrder,
    setSortOrder: (newSortOrder: "asc" | "desc") =>
      dispatch(setSortOrder(newSortOrder)),
    setItemsPerPage: (newItemsPerPage: number) =>
      dispatch(setItemsPerPage(newItemsPerPage)),
    clearFilters: () => dispatch(clearFilters()),
    refreshOrders: () =>
      dispatch(
        getOrders({
          pageIndex: currentPageIndex,
          limit: itemsPerPage,
          sortOrder,
          status: statusFilter,
          orderId: searchOrderId,
        })
      ),
  };
}
