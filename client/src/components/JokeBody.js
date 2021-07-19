import React, { useState, useEffect } from "react";
import { FaTwitter, FaRandom } from "react-icons/fa";

import KantePic2 from "../images/p116594.png";

const api = `${process.env.REACT_APP_API}/api/v1/jokes`;

const JokeBody = () => {
  const [joke, setJoke] = useState("");
  const [author, setAuthor] = useState("");

  // Call Jokes API
  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      const res = await fetch(api);
      const { jokes } = await res.json();

      // Get random jokes
      let randomNum = Math.floor(Math.random() * jokes.length);
      let randomJoke = jokes[randomNum];

      setJoke(randomJoke.joke);
      setAuthor(randomJoke.author);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    fetchJokes();
  };

  let tweetURL = `https://twitter.com/intent/tweet?text=${joke} - ${author}`;

  return (
    <section className="joke-body">
      <div className="joke-container">
        <img src={KantePic2} alt="Kante-in-action" className="kante-bg" />
        <br />
        <div className="joke">
          <p className="joke-item">{joke}</p>
          <p className="joke-author"> – {author}</p>
        </div>
        <div className="joke-btn">
          <a className="btn tweet-btn" href={tweetURL} target="_blank">
            <FaTwitter className="twitter" /> Tweet
          </a>
          <button onClick={handleClick} className="btn quote-btn">
            <FaRandom className="quote" /> New Fact
          </button>
        </div>
      </div>
    </section>
  );
};

export default JokeBody;
