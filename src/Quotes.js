import React from 'react';

const quoteBubble = {
<<<<<<< HEAD
    width: 300,
    background: "white",
    borderRadius: "50%",
    padding: "3rem 4rem",
=======
    width: 500,
    background: "white",
    borderRadius: "50%",
    padding: "3rem 4rem 1.5rem 4rem",
>>>>>>> 7fb0e13d265fca1f242856935f4c56d2137d52e0
    margin: "1.5rem", 
    textAlign: "center"
  }

<<<<<<< HEAD
const hidden = {
    display: "none"
}

const container = {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center"
}

function Quotes(props) {
    return(
        <div className="quote-container" style={container}>
            <h2 className="setup" id="setup" style={props.newJoke ? quoteBubble : hidden}>
                {props.setup}
            </h2>
            <h2
                className="punchline"
                id="punchline"
                style={props.newJoke ? hidden : quoteBubble}>
                {props.punchline}
            </h2>
=======

function Quotes(props) {
    return(
        <div className="quote-bubble" style={quoteBubble}>
            <h2 className="quote-text" id="text">
                {props.randomQuote.quote}
            </h2>
            <h3 className="author" id="author">
                {props.randomQuote.author}
            </h3>
>>>>>>> 7fb0e13d265fca1f242856935f4c56d2137d52e0
        </div>
    );
}

export default Quotes;