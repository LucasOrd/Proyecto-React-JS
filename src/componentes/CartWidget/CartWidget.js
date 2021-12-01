import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.scss";
import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

export const CartWidget = () => {
  const { totalCantidad } = useContext(CartContext);
  return (
    <div className="cart-widget">
      <FaShoppingCart />
      <span>{totalCantidad()}</span>
    </div>
  );
};
