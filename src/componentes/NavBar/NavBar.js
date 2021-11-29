import "./NavBar.scss";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import React from "react";

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
          <li>Categorias</li>
          <li>
            <Link to="/category/Acero">Acero</Link>
          </li>
          <li>
            <Link to="/category/Vidrio">Vidrio</Link>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;
