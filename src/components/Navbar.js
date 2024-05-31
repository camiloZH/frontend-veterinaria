import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="logo">
        <img src={logo} alt="Logo de la Clínica Veterinaria" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/about">Sobre Nosotros</Link>
        </li>
        <li>
          <Link to="/services">Servicios</Link>
        </li>
        <li>
          <Link to="/appointments">Citas</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
