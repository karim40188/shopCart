import { useContext, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Categories from "./components/Categories/Categories";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { Toaster } from "react-hot-toast";
import ProtectedRouter, {
  PublicRoute,
} from "./components/ProtectedRouter/ProtectedRouter.jsx";
import { UserToken } from "./components/Context/Context.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";
import CheckOutSession from "./components/CheckOutSession/CheckOutSession.jsx";
import ForgotPassword from "./components/forgotPassword/forgotPassword.jsx";
import ResetPassword from "./components/resetPassword/resetPassword.jsx";
import Allorders from "./components/allorders/allorders.jsx";
import Brands from "./components/Brands/Brands.jsx";
import SpecificBrand from "./components/SpecificBrand/SpecificBrand.jsx";

function App() {
  let { setToken } = useContext(UserToken);

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setToken(localStorage.getItem("user"));
    } else {
      setToken(null);
    }
  }, [setToken]);

  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <ProtectedRouter>
              <Home />
            </ProtectedRouter>
          ),
        },
        {
          path: "/signup",
          element: (
            <PublicRoute>
              <Register />
            </PublicRoute>
          ),
        },
        {
          path: "/login",
          element: (
            <PublicRoute>
              <Login />
            </PublicRoute>
          ),
        },
        {
          path: "/forgotpassword",
          element: (
            <PublicRoute>
              <ForgotPassword />
            </PublicRoute>
          ),
        },
        {
          path: "/resetpassword",
          element: (
            <PublicRoute>
              <ResetPassword />
            </PublicRoute>
          ),
        },
        {
          path: "/products",
          element: (
            <ProtectedRouter>
              <Products />
            </ProtectedRouter>
          ),
        },
        {
          path: "/details/:id",
          element: (
            <ProtectedRouter>
              <ProductDetails />
            </ProtectedRouter>
          ),
        },
        {
          path: "/cart",
          element: (
            <ProtectedRouter>
              <Cart />
            </ProtectedRouter>
          ),
        },
        {
          path: "/checkout",
          element: (
            <ProtectedRouter>
              <CheckOutSession />
            </ProtectedRouter>
          ),
        },
        {
          path: "/allorders",
          element: (
            <ProtectedRouter>
              <Allorders />
            </ProtectedRouter>
          ),
        },
        {
          path: "/categories",
          element: (
            <ProtectedRouter>
              <Categories />
            </ProtectedRouter>
          ),
        },
        {
          path: "/brands",
          element: (
            <ProtectedRouter>
              <Brands />
            </ProtectedRouter>
          ),
        },
        {
          path: "/brands/:id",
          element: (
            <ProtectedRouter>
              <SpecificBrand />
            </ProtectedRouter>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
