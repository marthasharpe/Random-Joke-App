import React from 'react';
import Quotes from './Quotes';
import Buttons from './Buttons';

class QuoteBox extends React.Component {
    state = {
        setup: "",
        punchline: "",
        hidden: true
    }

    componentDidMount = () => {
        this.getNewJoke();
    }

    getNewJoke = () => {
        console.log(this.state);
        fetch("https://official-joke-api.appspot.com/jokes/programming/random")
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
            this.setState({
                setup: data[0].setup,
                punchline: data[0].punchline,
                hidden: true
            })
        })
        .catch(err => {
            console.log(err);
        });
    }

    getPunchline = () => {
        console.log(this.state);
        if(this.state.hidden === true) {
            this.setState({
                hidden: !this.state.hidden
            })
        }
    }

    render() {
        return(
            <div className="quote-box" id="quote-box">
                <Buttons getNewJoke={this.getNewJoke} getPunchline={this.getPunchline}/>
                <Quotes setup={this.state.setup} punchline={this.state.punchline} hidden={this.state.hidden}/>
            </div>
        )
    }
}

export default QuoteBox;