import React from 'react';

const quoteBubble = {
    width: "auto",
    maxWidth: 500,
    background: "white",
    borderRadius: "50%",
    padding: "3rem",
    margin: "1.5rem", 
  }

const possibleQuotes = [
    {
        quote: "If you are interested in what you do, that keeps you going!",
        author: "Stan Lee"
    },
    {
        quote: "I don’t really see a need to retire as long as I am having fun.",
        author: "Stan Lee"
    },
    {
        quote: "Excelsior!",
        author: "Stan Lee"
    }
]

const randomQuote = possibleQuotes[Math.floor(Math.random()) * possibleQuotes.length];

class Quotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomQuote
        }
    }
    render() {
        return(
            <div className="quote-bubble" style={quoteBubble}>
                <h2 className="quote-text" id="text">
                    {this.state.randomQuote.quote}
                </h2>
                <h3 className="author" id="author">
                    - {this.state.randomQuote.author}
                </h3>
                
            </div>
        );
    }
}

export default Quotes;