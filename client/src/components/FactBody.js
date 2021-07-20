import React, { useState, useEffect } from "react";
import { FaTwitter, FaRandom } from "react-icons/fa";

import KantePic2 from "../images/p116594.png";

const api = `${process.env.REACT_APP_API}/api/v1/jokes` || `/api/v1/jokes`;

const FactBody = () => {
  const [fact, setFact] = useState("");
  const [author, setAuthor] = useState("");

  // Call Jokes API
  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      const res = await fetch(api);
      const { jokes } = await res.json();

      // Get random jokes (facts)
      let randomNum = Math.floor(Math.random() * jokes.length);
      let randomJoke = jokes[randomNum];

      setFact(randomJoke.joke);
      setAuthor(randomJoke.author);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    fetchJokes();
  };

  let tweetURL = `https://twitter.com/intent/tweet?text=${fact} - ${author}`;

  return (
    <section className="joke-body">
      <div className="joke-container">
        <img src={KantePic2} alt="Kante" className="kante-bg" />
        <br />
        <div className="joke">
          <p className="joke-item">{fact}</p>
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

export default FactBody;
