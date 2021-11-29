import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.scss";

export const CartWidget = () => {
  const { productos } = useCartContext();
  return (
    <div className="cart-widget">
      <p>{productos.length}</p>
      <FaShoppingCart />
    </div>
  );
};
