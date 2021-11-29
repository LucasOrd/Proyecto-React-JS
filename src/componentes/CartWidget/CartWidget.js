import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.scss";
import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

export const CartWidget = () => {
  const { productos } = useContext(CartContext);
  return (
    <div className="cart-widget">
      <p>{productos}</p>
      <FaShoppingCart />
    </div>
  );
};
