import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserAuthContext } from "../components/Context";
const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useContext(UserAuthContext);
  return <div> {isLoggedIn ? children : <Navigate to="/login" />}</div>;
};
export default PrivateRoute;

// import React from "react";
// import { Route, Navigate, Routes } from "react-router-dom";
// import { useUserAuth } from "../components/Context";
// import Checkout from "../pages/Checkout";

// // PrivateRoute component for protected routes
// function PrivateRoute(props) {
//   const { isLoggedIn } = useUserAuth();

//   return isLoggedIn ? <Navigate to="/checkout" /> : <Navigate to="/login" />;
// }
// export default PrivateRoute;
