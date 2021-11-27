import ItemCount from "../ItemCount/ItemCount";
import React from "react";
import { Item } from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div>
      <h2>Nuestros Termos</h2>
      {items.map((termo) => (
        <Item key={termo.id} item={termo} />
      ))}
    </div>
  );
};
export default ItemList;
