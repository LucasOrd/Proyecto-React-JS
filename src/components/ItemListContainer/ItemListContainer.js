import React from "react";
import "./ItemListContainer.scss";
import "../ItemList/ItemList";
import { useEffect } from "react";

const DB_PRODUCTS = [
  {
    id: 1,
    precio: 100,
  },
  {
    id: 2,
    precio: 200,
  },
];

function crearPromesa() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(DB_PRODUCTS);
    }, 300);
  });
}

function ItemListContainer() {
  const [items, setItems] = useState(null);

  let requestDatos = crearPromesa();
  useEffect(() => {
    requestDatos
      .then(function (items_api) {
        setItems(crearPromesa);
      })
      .catch(function (error_msg) {
        consol.log(error_msg);
      })
      .finally(function () {
        console.log("Finalizo");
      });
  }, []);

  return <div>{items ? <ItemList items={items} /> : <h3>Cargando</h3>}</div>;
}

export default ItemListContainer;
