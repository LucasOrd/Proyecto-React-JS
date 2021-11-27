import { useState } from "react";

export const ItemCount = ({ stock = 10, initial = 0 }) => {
  const [cantidad, setCantidad] = useState(initial);

  const handleRestar = () => {
    if (cantidad > initial) {
      setCantidad(cantidad - 1);
    }
  };

  const handleSumar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  return (
    <div>
      <button onClick={handleRestar} className="btn btn-outline-primary">
        -
      </button>
      <span>{cantidad}</span>
      <button onClick={handleSumar} className="btn btn-outline-primary">
        +
      </button>
    </div>
  );
};

export default ItemCount;
