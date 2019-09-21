import React from 'react';
import Quotes from './Quotes';
import Buttons from './Buttons';
import Reactions from './Reactions';

class QuoteBox extends React.Component {
    state = {
        setup: "",
        punchline: "",
        hidden: true,
        loveCount: 0,
        huhCount: 0,
        spareCount: 0
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

    addLoveCount = () => {
        this.setState({
            loveCount: this.state.loveCount + 1
        })
    }

    addHuhCount = () => {
        this.setState({
            huhCount: this.state.huhCount + 1
        })
    }

    addSpareCount = () => {
        this.setState({
            spareCount: this.state.spareCount + 1
        })
    }

    render() {
        return(
            <div className="quote-box" id="quote-box">
                <Buttons
                    getNewJoke={this.getNewJoke}
                    getPunchline={this.getPunchline}
                    />
                <Quotes
                    setup={this.state.setup}
                    punchline={this.state.punchline}
                    hidden={this.state.hidden}
                    />
                <Reactions
                    loveCount={this.state.loveCount}
                    huhCount={this.state.huhCount}
                    spareCount={this.state.spareCount}
                    addLoveCount={this.addLoveCount}
                    addHuhCount={this.addHuhCount}
                    addSpareCount={this.addSpareCount}
                    />
            </div>
        )
    }
}

export default QuoteBox;