import React from 'react';
import Quotes from './Quotes';
import Buttons from './Buttons';

const possibleQuotes = [{quote:"only quote", author:"me"}];

class QuoteBox extends React.Component {
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
            <div className="quote-box" id="quote-box">
                <Quotes randomQuote={this.state.randomQuote}/>
                <Buttons getQuote={this.getQuote}/>
            </div>
        )
    }
}

export default QuoteBox;