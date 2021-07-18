import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-items">
        <p>
          Made with the MERN Stack by Kolade Chris Ksound <br /> A web developer
          focusing on frontend technologies and passionate Chelsea FC supporter.
        </p>
        <ol>
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
        </ol>
      </div>
    </section>
  );
};

export default Footer;
