import "./NavBar.scss";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <header className="navbar px-5">
      <h1>Termos</h1>

      <nav>
        <ul>
          <li>Productos</li>
          <li>Sobre Nosotros</li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;
