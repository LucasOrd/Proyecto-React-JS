import { getDoc, doc, collection } from "firebase/firestore/lite";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { pedirItem } from "../Datos/Datos";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productosRef = collection(db, "productos");
    const docRef = doc(productosRef, itemId);

    getDoc(docRef)
      .then((doc) => {
        setItem({
          id: doc.id,
          ...doc.data(),
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return <div>{loading ? <h2>Cargando</h2> : <ItemDetail item={item} />}</div>;
};
