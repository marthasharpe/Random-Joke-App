import React from 'react';

const quoteBubble = {
    width: 300,
    background: "white",
    borderRadius: "50%",
    padding: "3rem 4rem",
    margin: "1.5rem", 
    textAlign: "center"
  }

const hidden = {
    display: "none"
}

function Quotes(props) {
    return(
        <div className="quote-container">
            <h2 className="setup" id="setup" style={quoteBubble}>
                {props.setup}
            </h2>
            <h2 className="punchline" id="punchline" style={props.hidden? hidden : quoteBubble}>
                {props.punchline}
            </h2>
        </div>
    );
}

export default Quotes;