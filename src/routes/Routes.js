import React from "react";
import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Shop } from "../pages/Shop/Shop";
import { Checkout } from "../pages/Checkout/Checkout";
import { PurchaseCompleted } from "../pages/Completed/PurchaseCompleted";
import { Contactanos } from "../pages/Contactanos/Contactanos";
import { Register } from "../pages/Register/Register";
import { Login } from "../pages/Login/Login";

export const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contactanos" element={<Contactanos />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/completed" element={<PurchaseCompleted />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </ReactDomRoutes>
  );
};
