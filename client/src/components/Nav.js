import React, { useState } from "react";
import KanteHead from "../images/kantehead.png";

import { NavLink } from "react-router-dom";

const handleClick = () => {
  return window.location.reload();
};

const Nav = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/">
            <img src={KanteHead} alt="N'golo Kante" className="kante-pic" />
          </NavLink>
          <NavLink to="/">
            <h1 className="logo-text">KANTE FACTS</h1>
          </NavLink>
        </div>

        <ul>
          <li>
            <NavLink to="/" onClick={handleClick}>
              Random Fact
            </NavLink>
          </li>
          <li>
            <NavLink to="/submitfact">Submit Fact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
