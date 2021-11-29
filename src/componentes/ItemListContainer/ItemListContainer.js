import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ItemList } from "../ItemList/ItemList";
import { db } from "../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore/lite";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productosRef = collection(db, "productos");

    const q = categoryId
      ? query(productosRef, where("category", "==", categoryId))
      : productosRef;

    getDocs(q)
      .then((resp) => {
        const productos = resp.docs.map((elemento) => {
          return {
            id: elemento.id,
            ...elemento.data(),
          };
        });
        setItems(productos);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div>{loading ? <h2>Cargando...</h2> : <ItemList items={items} />}</div>
  );
};
