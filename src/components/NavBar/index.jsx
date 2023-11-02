import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useUserAuth } from "../Context";

const Navbar = () => {
  const { isLoggedIn, login, logout } = useUserAuth();
  return (
    <>
      <nav className="  bg-gray-700 text-gray-200 flex flex-wrap justify-between items-center mx-auto m-w-screen-xl p-6 duration-300 ease-in-out hover:shadow-lg hover:shadow-black/60 rounded-lg shadow-lg transition-transform transform scale-100 hover:scale-105 ">
        <Link className="hover:text-white font-bold" to="/">
          {" "}
          Home{" "}
        </Link>
        <br />
        <Link className="hover:text-white font-bold" to="/products">
          {" "}
          All Products{" "}
        </Link>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Link className="hover:text-white font-bold" to="/cart">
          {" "}
          Your Cart{" "}
        </Link>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        {isLoggedIn ? (
          <button className="hover:text-white font-bold" onClick={logout}>
            Logout
          </button>
        ) : (
          <Link className="hover:text-white font-bold" to="/login">
            Login
          </Link>
        )}
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
