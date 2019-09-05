import React from 'react';
import Quotes from './Quotes';

const container = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "red",
  width: 400,
  height: 300
}

function App() {
  return (
    <div className="app-container" id="quote-box" style={container}>
      <Quotes />    
      <div className="button-container">
        <button className="quote-button" id="new-quote">
          Next Quote
        </button>
        <button><a
          style={{textDecoration: "none"}}
          className="twitter-link"
          id="tweet-quote"
          href="twitter.com/intent/tweet"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet
        </a></button>
      </div>
    </div>
  );
}

export default App;
