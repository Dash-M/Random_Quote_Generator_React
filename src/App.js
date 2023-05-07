import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [quotes, setQuotes] = useState("");

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="quote">
          <p>{quotes.text}</p>
          <p className="author">- {quotes.author}</p>
        </div>
        <div className="btnContainer">
          <button onClick={getQuote} className="btn">
            Get Quote
          </button>
          <a
            href={`https://twitter.com/intent/tweet?text=${quotes.text}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Tweet
          </a>
        </div>
      </div>
    </div>
  );
}
