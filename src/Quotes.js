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

const possibleQuotes = [
    {
        quote: "If you are interested in what you do, that keeps you going!",
        author: "Joe Lee"
    },
    {
        quote: "I don’t really see a need to retire as long as I am having fun.",
        author: "Bob Lee"
    },
    {
        quote: "Excelsior!",
        author: "Stan Lee"
    }
]

class Quotes extends React.Component {
    state = {
        randomQuote: possibleQuotes[Math.floor(Math.random() * possibleQuotes.length)]
    }
    getQuote = () => {
        this.setState({
            randomQuote: possibleQuotes[Math.floor(Math.random() * possibleQuotes.length)]
        })
    }
    render() {
        return(
            <div className="quote-bubble" style={quoteBubble}>
                <h2 className="quote-text" id="text">
                    {this.state.randomQuote.quote}
                </h2>
                <h3 className="author" id="author">
                    {this.state.randomQuote.author}
                </h3>
            
                <div className="button-container">
                    <button
                        className="quote-button"
                        id="new-quote"
                        style={{cursor: "pointer"}}
                        onClick={this.getQuote}
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
                </div>
            </div>
        );
    }
}

export default Quotes;