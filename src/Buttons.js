import React from 'react';

const buttonBox = {
    display: "flex",
    justifyContent: "center",
}

<<<<<<< HEAD
const button = {
    background: "darkblue",
    color: "white",
    fontSize: "1.2rem",
    border: "3px solid white",
    cursor: "pointer",
    padding: "0.5rem",
    margin: "1rem",
    borderRadius: "0.5rem",
}

function Buttons(props) {
    return(
        <div className="button-container" style={buttonBox}>
            <div
                className="button"
                style={button}
                onClick={props.newJoke ? props.getPunchline : props.getNewJoke}
            >
                {props.newJoke ? 'Get Answer' : 'Get Joke'}
            </div>
            
=======
function Buttons(props) {
    return(
        <div className="button-container" style={buttonBox}>
            <button
                className="quote-button"
                id="new-quote"
                style={{cursor: "pointer"}}
                onClick={props.getQuote}
            >
            Next Quote
            </button>
            
            <button>
                <a
                style={{textDecoration: "none"}}
                className="twitter-link"
                id="tweet-quote"
                href="twitter.com/intent/tweet"
                target="_blank"
                rel="noopener noreferrer"
                >
                Tweet
                </a>
            </button>
>>>>>>> 7fb0e13d265fca1f242856935f4c56d2137d52e0
        </div>
    )
}

export default Buttons;