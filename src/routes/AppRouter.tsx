import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layouts
const MainLayout = lazy(() => import("@layouts/MainLayout/MainLayout"));
const ProfileLayout = lazy(
  () => import("@layouts/ProfileLayout/ProfileLayout")
);
// components
import { LottieHandler, PageSuspenseFallback } from "@components/feedback";
// pages
const Home = lazy(() => import("@pages/Home"));
const Wishlist = lazy(() => import("@pages/Wishlist"));
const Cart = lazy(() => import("@pages/Cart"));
const Products = lazy(() => import("@pages/Products"));
const Login = lazy(() => import("@pages/Login"));
const Register = lazy(() => import("@pages/Register"));
const AccountDetails = lazy(() => import("@pages/AccountDetails"));
const Product = lazy(() => import("@pages/Product"));
const Logout = lazy(() => import("@pages/Logout"));
const AdminMain = lazy(() => import("@pages/Admin/Main"));
const AdminOrders = lazy(() => import("@pages/Admin/Orders"));
const AdminInventory = lazy(() => import("@pages/Admin/Inventory"));

// error
import Error from "@pages/Error";

// protect route
import ProtectedRoute from "@components/auth/ProtectedRoute";
import Orders from "@pages/Orders";
import ProtectedAdminRoute from "@components/auth/ProtectedAdminRoute";
import { AdminLayout } from "@layouts/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <div style={{ marginTop: "10%" }}>
            <LottieHandler type="loading" message="Loading please wait..." />
          </div>
        }
      >
        <MainLayout />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <PageSuspenseFallback>
            <Home />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <PageSuspenseFallback>
              <Cart />
            </PageSuspenseFallback>
          </ProtectedRoute>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <ProtectedRoute>
            <PageSuspenseFallback>
              <Wishlist />
            </PageSuspenseFallback>
          </ProtectedRoute>
        ),
      },
      {
        path: "/products/:category",
        element: (
          <PageSuspenseFallback>
            <Products />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "/product/:id",
        element: (
          <PageSuspenseFallback>
            <Product />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "login",
        element: (
          <PageSuspenseFallback>
            <Login />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "register",
        element: (
          <PageSuspenseFallback>
            <Register />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "account",
        element: (
          <ProtectedRoute>
            <PageSuspenseFallback>
              <ProfileLayout />
            </PageSuspenseFallback>
          </ProtectedRoute>
        ),
        children: [
          {
            path: "orders",
            element: (
              <PageSuspenseFallback>
                <Orders />
              </PageSuspenseFallback>
            ),
          },
          {
            path: "details",
            element: (
              <PageSuspenseFallback>
                <AccountDetails />
              </PageSuspenseFallback>
            ),
          },
        ],
      },
      {
        path: "logout",
        element: <Logout />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedAdminRoute>
        <PageSuspenseFallback>
          <AdminLayout />
        </PageSuspenseFallback>
      </ProtectedAdminRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PageSuspenseFallback>
            <AdminMain />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "orders",
        element: (
          <PageSuspenseFallback>
            <AdminOrders />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "inventory",
        element: (
          <PageSuspenseFallback>
            <AdminInventory />
          </PageSuspenseFallback>
        ),
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
