import React, { useState, useEffect } from "react";
import axios from "axios";
import QuoteBox from "./components/QuoteBox";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await axios.get("https://api.quotable.io/random");
      const { content, author } = response.data;
      setQuote(content);
      setAuthor(author);
    } catch (error) {
      console.error("Error fetching the quote", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text="${quote}" - ${author}`;
    window.open(twitterUrl, "_blank");
  };

  return (
    <div className="app">
      <QuoteBox quote={quote} author={author} fetchQuote={fetchQuote} tweetQuote={tweetQuote} />
    </div>
  );
}

export default App;
