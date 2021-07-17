import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import SubmitJoke from "./SubmitJoke";
import { FaTwitter, FaRandom } from "react-icons/fa";

import KantePic from "../images/Kanteinaction.png";
import KantePic2 from "../images/p116594.png";

const JokeBody = () => {
  const [joke, setJoke] = useState(
    "70% of the earth is covered by water, the rest is covered by N'golo Kante"
  );

  // Call Jokes API
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/v1/jokes`)
      .then((res) => res.json())
      .then((data) => {
        setJoke(data.joke);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="joke">
      <p>This is the Joke body</p>
      <div className="joke-item">{joke}</div>
      <div className="joke-container">
        <img src={KantePic2} alt="Kante-in-action" className="kante-bg" />
        <br />
        <button className="btn tweet-btn">
          <FaTwitter className="Twitter" />
        </button>
        <button className="btn quote-btn">
          <FaRandom className="quote" />
        </button>
      </div>
    </section>
  );
};

export default JokeBody;
