import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import { collection, addDoc } from "firebase/firestore/lite";
import { db } from "../firebase/config";

export const Checkout = () => {
  const [ordderId, setOrderId] = useState(null);

  const { cart, totalCompra } = useContext(CartContext);

  const [valores, setValores] = useState({
    nombre: "",
    email: "",
    tel: "",
  });

  const generarOrden = (buyer) => {
    const order = {
      buyer: buyer,
      items: cart,
      total: totalCompra(),
    };

    const ordersRef = collection(db, "orders");

    addDoc(ordersRef, order).then((res) => {
      setOrderId(res.id);
    });
  };

  const handleSubmit = (elemento) => {
    elemento.preventDefault();
    generarOrden(valores);
  };

  const handleChange = (elemento) => {
    setValores({
      ...valores,
      [elemento.target.name]: elemento.target.value,
    });
  };

  return (
    <div className="container my-5">
      {ordderId ? (
        <p>Su id de compra es: {ordderId}</p>
      ) : (
        <>
          <h3>Resumen de compra</h3>

          <form onSubmit={handleSubmit}>
            <input
              className="form-control my-2"
              value={valores.nombre}
              onChange={handleChange}
              placeholder="Nombre"
              type="text"
              name="nombre"
            />
            <input
              value={valores.email}
              onChange={handleChange}
              className="form-control my-2"
              placeholder="Email"
              type="email"
              name="email"
            />
            <input
              value={valores.tel}
              onChange={handleChange}
              className="form-control my-2"
              placeholder="Telefono"
              type="tel"
              name="tel"
            />
            <button type="submit" className="btn btn-primary">
              Finalizar
            </button>
          </form>
        </>
      )}
    </div>
  );
};
