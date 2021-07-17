import React from "react";
import KanteHead from "../images/kantehead.png";

import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">
          <img src={KanteHead} alt="N'golo Kante" className="kante-pic" />
        </NavLink>
        <NavLink to="/">
          <h1>N'GOLO KANTE JOKES</h1>
        </NavLink>
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
