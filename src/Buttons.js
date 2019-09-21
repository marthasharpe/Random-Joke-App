import React from 'react';

const buttonBox = {
    display: "flex",
    justifyContent: "center",
}

const button = {
    background: "white",
    cursor: "pointer",
    padding: "0.5rem",
    margin: "1rem",
    borderRadius: "0.5rem"
}

function Buttons(props) {
    return(
        <div className="button-container" style={buttonBox}>
            <div
                className="button"
                id="new-joke"
                style={button}
                onClick={props.getNewJoke}
            >
                New Joke
            </div>
            <div
                className="button"
                id="punchline"
                style={button}
                onClick={props.getPunchline}
            >
                Get Answer
            </div> 
        </div>
    )
}

export default Buttons;