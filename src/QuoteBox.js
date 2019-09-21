import React from 'react';
import Quotes from './Quotes';
import Buttons from './Buttons';

class QuoteBox extends React.Component {
    state = {
        setup: "",
        punchline: ""
    }

    componentDidMount = () => {
        this.getQuote();
    }

    getQuote = () => {
        fetch("https://official-joke-api.appspot.com/jokes/programming/random")
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
            this.setState({
                setup: data[0].setup,
                punchline: data[0].punchline
            })
        })
        .catch(err => {
            console.log(err);
        });

    }

    render() {
        return(
            <div className="quote-box" id="quote-box">
                <Quotes setup={this.state.setup} punchline={this.state.punchline}/>
                <Buttons getQuote={this.getQuote}/>
            </div>
        )
    }
}

export default QuoteBox;