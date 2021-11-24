import { useState } from "react";

const ItemCount = () => {
  const [cantidad, setCantidad] = useState(0);

  const handleRestar = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  const handleSumar = () => {
    if (cantidad < 100) {
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
