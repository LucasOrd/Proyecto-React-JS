import "./NavBar.scss";

import { CartWidget } from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <header className="nav">
      <h1>Venta de Termos</h1>
      <nav>
        <ul>
          <li className="li">Nuestros Productos</li>
          <li className="li">Sobre nosotros</li>
          <li className="li">Contacto</li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;
