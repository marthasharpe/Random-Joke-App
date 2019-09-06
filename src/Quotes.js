import React from 'react';

const quoteBubble = {
    width: "auto",
    maxWidth: 500,
    background: "white",
    borderRadius: "50%",
    padding: "3rem",
    margin: "1.5rem", 
    textAlign: "center"
  }


function Quotes(props) {
    return(
        <div className="quote-bubble" style={quoteBubble}>
            <h2 className="quote-text" id="text">
                {props.randomQuote.quote}
            </h2>
            <h3 className="author" id="author">
                {props.randomQuote.author}
            </h3>
        </div>
    );
}

export default Quotes;