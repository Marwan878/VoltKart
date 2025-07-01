import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import auth from "./auth/authSlice";
import cart from "./cart/cartSlice";
import orders from "./orders/ordersSlice";
import products from "./products/productsSlice";
import toasts from "./toasts/toastsSlice";
import wishlist from "./wishlist/wishlistSlice";
import dashboardOrders from "./dashboardOrders/dashboardOrdersSlice";
import metrics from "./metrics/metricsSlice";
import inventory from "./inventory/inventorySlice";

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["products"],
};

const wishlistPersistConfig = {
  key: "wishlist",
  storage,
  whitelist: ["productIds"],
};

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["user", "accessToken"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, auth),
  products,
  orders,
  toasts,
  cart: persistReducer(cartPersistConfig, cart),
  wishlist: persistReducer(wishlistPersistConfig, wishlist),
  dashboardOrders,
  metrics,
  inventory,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          "toasts/addToast",
        ],
        ignoredPaths: [/^toasts\.records\.\d+\.onCloseToast$/],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);

export { persistor, store };
