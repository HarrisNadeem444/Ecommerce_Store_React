import { useState } from "react";
import { Routes, Route, Router } from "react-router-dom";
import PrivateRoute from "./ProtectedRoutes";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProductDetails from "../pages/Product Details";
import UserAuthProvider from "../components/Context";
import PageNotFoundErrorPage from "../pages/PageNotFoundErrorPage";
import Checkout from "../pages/Checkout";
import NavBar from "../components/NavBar";
import ProtectedRoutes from "./ProtectedRoutes";

const MyRouting = () => {
  return (
    <div>
      <UserAuthProvider>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route
              path="cart"
              element={
                <PrivateRoute>
                  <Cart />
                </PrivateRoute>
              }
            />
            <Route
              path="checkout"
              element={
                <PrivateRoute>
                  <Checkout />
                </PrivateRoute>
              }
            />

            <Route path="products" element={<Products />} />

            <Route
              path="product-details/:productID"
              element={<ProductDetails />}
            />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="*" element={<PageNotFoundErrorPage />} />
        </Routes>
      </UserAuthProvider>
    </div>
  );
};

export default MyRouting;
