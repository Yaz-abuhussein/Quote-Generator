import React from "react";
import "./QuoteBox.css";

const QuoteBox = ({ quote, author, fetchQuote, tweetQuote }) => {
  return (
    <div className="quote-box">
      <div className="quote-text">
        <h2 className="quote">"{quote}"</h2>
        <p className="author">- {author}</p>
      </div>
      <div className="buttons">
        <button onClick={fetchQuote} className="btn new-quote">
          New Quote
        </button>
        <button onClick={tweetQuote} className="btn tweet">
          Tweet
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;
