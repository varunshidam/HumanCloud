import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import FoodDetails from "../pages/FoodDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoutes from "../pages/ProtectedRoutes";
import PrivateRoutes from "../pages/PrivateRoutes";
import Header from "../components/Header/Header";
import { useSelector } from "react-redux";
import Carts from "../components/UI/cart/Carts";
import LoginForm from "../pages/LoginForm";
import Registeration from "../pages/Registeration";
import SignUpForm from "../pages/SignUpForm";
// import Carts from "../UI/cart/Carts.jsx";
const Routers = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <>
      {/* <Header /> */}
      {/* <Carts/> */}
      {showCart && <Carts />}
      <Routes>
        {/* <Route path="/" element={<ProtectedRoutes />}>
          <Route
            path="Create"
            element={<ProtectedRoutes roleRequired="USER" />}
          >
            <Route path="/Create" element={<Contact />} />
          </Route>
        </Route> */}
        {/* <Route path="/*" element={<Navigate to="/Login" />} /> */}
        <Route
          exact
          path="/home"
          element={
            <PrivateRoutes>
              <Home />
            </PrivateRoutes>
          }
        />
        {/*  */}
        <Route
          exact
          path="/foods"
          element={
            <PrivateRoutes>
              <AllFoods />
            </PrivateRoutes>
          }
        />

        {/* <Route exact path="/" element={<Login />} /> */}
        {/* <Route exact path="/home" element={<Home />} /> */}
        <Route exact path="/foods" element={<AllFoods />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout" element={<Checkout />} />
        {/* <Route exact path="/" element={<Login />} /> */}
        <Route exact path="/" element={<SignUpForm />} />
        {/* <Route exact path="/" element={<LoginForm />} /> */}
        {/* <Route exact path="/register" element={<Register />} /> */}
        <Route exact path="/register" element={<Registeration />} />
        <Route exactx path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Routers;
