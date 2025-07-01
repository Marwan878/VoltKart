import { createContext, ReactNode, useContext } from "react";
import EmptyTableContent from "./EmptyTableContent";
import ErrorMessage from "./ErrorMessage";
import LoadingIndicator from "./LoadingIndicator";
import OrdersFilters from "./OrderFilters/OrdersFilters";
import Header from "./OrdersHeader";
import OrdersPagination from "./OrdersPagination";
import OrdersTableContainer from "./OrdersTableContainer";
import TableBodyContent from "./OrdersTableBodyContent";

import { TOrderItem, TOrderStatus } from "@types";

export type OrdersContextType = {
  orders: TOrderItem[];
  loading: boolean;
  error: string | null;
  totalOrders: number;
  currentPageIndex: number;
  itemsPerPage: number;
  setCurrentPage: (page: number) => void;
  setItemsPerPage: (items: number) => void;
  setSortOrder: (order: "asc" | "desc") => void;
  setStatusFilter: (status: TOrderStatus | "") => void;
  setSearchOrderId: (id: string) => void;
  clearFilters: () => void;
  refreshOrders: () => Promise<TOrderItem[]>;
  search: () => void;
  handleStatusChange: (orderId: string, status: TOrderStatus) => void;
  searchOrderId: string;
  sortOrder: "asc" | "desc";
  statusFilter: TOrderStatus | "";
};

type OrdersProviderProps = OrdersContextType & {
  children: ReactNode;
};

const OrdersContext = createContext<OrdersContextType>({
  orders: [],
  loading: false,
  error: null,
  totalOrders: 0,
  currentPageIndex: 1,
  itemsPerPage: 10,
  searchOrderId: "",
  sortOrder: "desc",
  statusFilter: "",
  setCurrentPage: () => {},
  setItemsPerPage: () => {},
  setSortOrder: () => {},
  setStatusFilter: () => {},
  setSearchOrderId: () => {},
  clearFilters: () => {},
  refreshOrders: () => Promise.resolve([]),
  search: () => {},
  handleStatusChange: () => {},
});

const OrdersProvider = ({
  children,
  ...rest
}: Readonly<OrdersProviderProps>) => {
  return (
    <OrdersContext.Provider value={rest}>
      <div className="d-flex flex-column h-100">{children}</div>
    </OrdersContext.Provider>
  );
};

OrdersProvider.ErrorMessage = ErrorMessage;
OrdersProvider.LoadingIndicator = LoadingIndicator;
OrdersProvider.Header = Header;
OrdersProvider.OrdersFilters = OrdersFilters;
OrdersProvider.TableContainer = OrdersTableContainer;
OrdersProvider.TableBodyContent = TableBodyContent;
OrdersProvider.EmptyTableContent = EmptyTableContent;
OrdersProvider.OrdersPagination = OrdersPagination;
OrdersProvider.TableBodyContent = TableBodyContent;
OrdersProvider.OrdersPagination = OrdersPagination;

const useOrders = () => {
  const context = useContext(OrdersContext);
  if (!context) {
    throw new Error("useOrders must be used within an OrdersProvider");
  }
  return context;
};

export { OrdersContext, OrdersProvider, useOrders };
