import React from "react";
import { Link } from "react-router-dom";

const Item = ({ props }) => {
  return (
    <div className="col-3 m-1">
      <img src={props.img} />
      <h2>{props.nombre}</h2>
      <p>Precio: ${props.precio}</p>
      <p>Categoría: {props.category}</p>
      <Link to={`/detail/${props.id}`} className="btn btn-primary">
        Ver más
      </Link>
    </div>
  );
};

export default Item;
