import "./NavBar.scss";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header className="navbar px-5">
      <Link to="/">
        <h1>Termos</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Productos</Link>
          </li>
          <li>Sobre Nosotros</li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;
