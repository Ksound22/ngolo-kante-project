import React from "react";
import KanteHead from "../images/kantehead.png";

import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/">
            <img src={KanteHead} alt="N'golo Kante" className="kante-pic" />
          </NavLink>
          <NavLink to="/">
            <h1 className="logo-text">KANTE JOKES</h1>
          </NavLink>
        </div>
        <ul>
          <li>
            <NavLink to="/">Random Joke</NavLink>
          </li>
          <li>
            <NavLink to="/submitjoke">Submit Joke</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
