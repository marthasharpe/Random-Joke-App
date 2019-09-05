import React from 'react';

const quoteBubble = {
    width: "auto",
    maxWidth: 500,
    background: "white",
    border: "4px solid black",
    borderRadius: "50%",
    padding: "3rem",
    margin: "1.5rem", 
  }

class Quotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: "Excelsior!",
            author: "- Stan Lee"
        }
    }
    render() {
        // const possibleQuotes = [
        //     {
        //     quote: "",
        //     author: ""
        //     }
        // ]
        return(
            <div className="quote-bubble" style={quoteBubble}>
                <h2 className="quote" id="text">
                    {this.state.quote}
                </h2>
                <h3 className="author" id="author">
                    {this.state.author}
                </h3>
                
            </div>
        );
    }
}

export default Quotes;