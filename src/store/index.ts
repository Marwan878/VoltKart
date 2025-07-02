import { combineReducers, configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice";
import cart from "./cart/cartSlice";
import orders from "./orders/ordersSlice";
import products from "./products/productsSlice";
import toasts from "./toasts/toastsSlice";
import wishlist from "./wishlist/wishlistSlice";
import dashboardOrders from "./dashboardOrders/dashboardOrdersSlice";
import metrics from "./metrics/metricsSlice";
import inventory from "./inventory/inventorySlice";

const rootReducer = combineReducers({
  auth,
  products,
  orders,
  toasts,
  cart,
  wishlist,
  dashboardOrders,
  metrics,
  inventory,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["toasts/addToast"],
        ignoredPaths: [/^toasts\.records\.\d+\.onCloseToast$/],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export { store };
