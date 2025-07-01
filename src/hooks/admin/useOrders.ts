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
import { addToast } from "@store/toasts/toastsSlice";
import { useCallback, useEffect } from "react";

import { TOrderStatus } from "@types";

export default function useOrders() {
  const dispatch = useAppDispatch();
  const {
    currentPageIndex,
    itemsPerPage,
    searchOrderId,
    statusFilter,
    sortOrder,
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
    handleStatusChange,
    search: handleSearch,
    setSearchOrderId: (newSearchOrderId: string) =>
      dispatch(setSearchOrderId(newSearchOrderId)),
    setStatusFilter: (newStatusFilter: TOrderStatus | "") =>
      dispatch(setStatusFilter(newStatusFilter)),
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
