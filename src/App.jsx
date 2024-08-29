import { useContext, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Categories from "./components/Categories/Categories";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
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
          // eslint-disable-next-line no-undef
          path: "/",
          element: <Home />,
        },
        {
          path: "/signup",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/forgotpassword",
          element: <ForgotPassword />,
        },
        {
          path: "/resetpassword",
          element: <ResetPassword />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/details/:id",
          element: <ProductDetails />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/checkout",
          element: <CheckOutSession />,
        },
        {
          path: "/allorders",
          element: <Allorders />,
        },
        {
          path: "/categories",
          element: <Categories />,
        },
        {
          path: "/brands",
          element: <Brands />,
        },
        {
          path: "/brands/:id",
          element: <SpecificBrand />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}>
        {/* <Toaster position="bottom-right" reverseOrder={false} /> */}
      </RouterProvider>
    </>
  );
}

export default App;
