import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import { collection, addDoc } from "firebase/firestore/lite";
import { db } from "../firebase/config";

export const Checkout = () => {
  const [ordderId, setOrderId] = useState(null);

  const { cart, totalCompra } = useContext(CartContext);

  const generarOrden = () => {
    const order = {
      buyer: {
        nombre: "lucas",
        email: "lucas@gmail.com",
        tel: 1234,
      },
      items: cart,
      total: totalCompra(),
    };

    const ordersRef = collection(db, "orders");

    addDoc(ordersRef, order).then((res) => {
      setOrderId(res.id);
    });
  };

  return (
    <div className="container my-5">
      {ordderId ? (
        <p>Su id de compra es: {ordderId}</p>
      ) : (
        <>
          <h3>Resumen de compra</h3>
          <button onClick={generarOrden}>Finalizar</button>
        </>
      )}
    </div>
  );
};
