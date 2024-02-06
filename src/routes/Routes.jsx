import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Homepage from "../pages/Homepage/Homepage";
import Main from "../layouts/Main";
import Products from "../pages/Products/Products";
import Errorpage from "../components/Errorpage";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import ProductList from "../pages/Dashboard/Products/ProductList";
import AddProduct from "../pages/Dashboard/Products/AddProduct";
import UserList from "../pages/Dashboard/Users/UserList";
import OrderList from "../pages/Dashboard/Orders/OrderList";
import Analytics from "../pages/Dashboard/Analytics/Analytics";

import CustomerSupport from "../pages/Dashboard/CustomerSupport/CustomerSupport";
import Settings from "../pages/Dashboard/Settings/Settings";
import BannerList from "../pages/Dashboard/Banner/BannerList";
import SpecialOffer from "../pages/Dashboard/SpecialOffer/SpecialOffer";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/blogs",
        element: <Products />,
      },
      {
        path: "/projects",
        element: <Products />,
      },
    ],
  },
  // admin dashboard
  {
    path: "/dashboard",
    element: (
      <PrivateRoute allowedRoles={["admin", "super admin"]} path={"/"}>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/analytics",
        element: <Analytics />,
      },
      {
        path: "/dashboard/products",
        element: <ProductList />,
      },
      {
        path: "/dashboard/products/add-product",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/users",
        element: <UserList />,
      },
      {
        path: "/dashboard/orders",
        element: <OrderList />,
      },
      {
        path: "/dashboard/banner",
        element: <BannerList />,
      },
      {
        path: "/dashboard/special-offer",
        element: <SpecialOffer />,
      },
      {
        path: "/dashboard/settings",
        element: <Settings />,
      },
      {
        path: "/dashboard/customer-support",
        element: <CustomerSupport />,
      },
    ],
  },

  {
    path: "*",
    element: <Errorpage />,
  },
]);
