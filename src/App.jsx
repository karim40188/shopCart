
import React, { useContext, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Categories from "./components/Categories/Categories";
import Brands from "./components/Brands/Brands";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { Toaster } from "react-hot-toast";
import ProtectedRouter, { PublicRoute } from "./components/ProtectedRouter/ProtectedRouter.jsx";
import { UserToken } from "./components/Context/Context.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";
import CheckOutSession from "./components/CheckOutSession/CheckOutSession.jsx";
import ForgotPassword from "./components/forgotPassword/forgotPassword.jsx";
import ResetPassword from "./components/resetPassword/resetPassword.jsx";
import Allorders from "./components/allorders/allorders.jsx";

function App() {
  let { token, setToken } = useContext(UserToken);
  
  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setToken(localStorage.getItem("user"));
    } else {
      setToken(null);
    }
  }, [setToken])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/forgotpassword"
            element={
              <PublicRoute>
                <ForgotPassword />
              </PublicRoute>
            }
          />
          <Route
            path="/resetpassword"
            element={
              <PublicRoute>
                <ResetPassword />
              </PublicRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRouter>
                <Home />
              </ProtectedRouter>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRouter>
                <Home />
              </ProtectedRouter>
            }
          />
          <Route
            path="/products"
            element={
              <ProtectedRouter>
                <Products />
              </ProtectedRouter>
            }
          />
          <Route
            path="/details/:id"
            element={
              <ProtectedRouter>
                <ProductDetails />
              </ProtectedRouter>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRouter>
                <Cart />
              </ProtectedRouter>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRouter>
                <CheckOutSession />
              </ProtectedRouter>
            }
          />
          <Route
            path="/allorders"
            element={
              <ProtectedRouter>
                <Allorders />
              </ProtectedRouter>
            }
          />
          <Route
            path="/categories"
            element={
              <ProtectedRouter>
                <Categories />
              </ProtectedRouter>
            }
          />
          <Route
            path="/brands"
            element={
              <ProtectedRouter>
                <Brands />
              </ProtectedRouter>
            }
          />
          
        </Route>
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
