import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li>
          <Link to="/api">API</Link>
        </li>
        <li>
          <Link to="/contact">Contact Developer</Link>
        </li>
        <li>
          <Link to="/">Random Joke</Link>
        </li>
        <li>
          <Link to="/submitjoke">Submit Joke</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
