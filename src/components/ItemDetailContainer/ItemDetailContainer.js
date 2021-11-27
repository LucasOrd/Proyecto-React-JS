import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ItemDetail } from "../ItemDetail/ItemDetail.js";
import { pedirItem } from "../Datos/Datos";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    pedirItem(Number(itemId))
      .then((resp) => setItem(resp))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return <div>{loading ? <h2>Cargando</h2> : <ItemDetail item={item} />}</div>;
};

export default ItemDetailContainer;
