import "./Navbarstyle.css";

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="header">
      <Link to="/">
        <h1>Travel guide</h1>
      </Link>
      <ul class="navmenu">
        <li>
          <Link to="/">Apie mus</Link>
        </li>
        <li>
          <Link to="/Kainos">Kainos</Link>
        </li>
        <li>
          <Link to="/Kryptys">Kryptys</Link>
        </li>
        <li>
          <Link to="/Susisiekite">Susisiekite</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
