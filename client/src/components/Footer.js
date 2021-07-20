import React from "react";
import { Link } from "react-router-dom";

const handleClick = () => {
  return window.location.reload();
};

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-items">
        <p>
          Made with the MERN Stack by Kolade Chris Ksound, <br />
          Web developer focusing on frontend technologies and passionate Chelsea
          FC supporter. <br /> Dedicated to N'golo Kante.
        </p>
        <ol>
          <li>
            <Link to="/" onClick={handleClick}>
              Random Fact
            </Link>
          </li>
          <li>
            <Link to="/submitfact">Submit Fact</Link>
          </li>
          <li>
            <a href="https://twitter.com/koladechris">Contact Developer</a>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Footer;
