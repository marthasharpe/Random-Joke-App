import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container" id="quote-box">
      <h1 className="title">Quote Machine</h1>
      <p className="quote" id="text">
        {}
        <span className="author" id="author">
         {}
        </span>
      </p>
      
      <div className="button-container">
        <button className="quote-button" id="new-quote">
          Next Quote
        </button>
        <a
          className="twitter-link"
          id="tweet-quote"
          href="twitter.com/intent/tweet"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet
        </a>
      </div>
    </div>
  );
}

export default App;
