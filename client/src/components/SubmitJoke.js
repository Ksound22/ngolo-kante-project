import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

const SubmitJoke = () => {
  return (
    <div>
      <Nav />
      <div className="submit-text">
        <p>
          To submit a funny fact about Kante, fill this <a href="#">form</a>.
        </p>
        <p>I will publish your name as the author</p>
      </div>
      <Footer />
    </div>
  );
};

export default SubmitJoke;
