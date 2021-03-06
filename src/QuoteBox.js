import React from 'react';
import Quotes from './Quotes';
import Buttons from './Buttons';
import Reactions from './Reactions';

class QuoteBox extends React.Component {
    state = {
        setup: "",
        punchline: "",
        newJoke: false,
        loveCount: 0,
        huhCount: 0,
        spareCount: 0
    }

    componentDidMount = () => {
        this.getNewJoke();
    }

    getNewJoke = () => {
        fetch("https://official-joke-api.appspot.com/jokes/programming/random")
        .then(response => {
            return response.json();
        })
        .then(data => {
            this.setState({
                setup: data[0].setup,
                punchline: data[0].punchline,
                newJoke: true,
            })
        })
        .catch(err => {
            console.log(err);
        });
    }

    getPunchline = () => {
        this.setState({
            newJoke: false
        })
    }

    addLoveCount = () => {
        if (this.state.loveCount === 5){
            alert("You seem to be enjoying yourself. Share some jokes with your geeky friends.")
        } else {
            this.setState({
                loveCount: this.state.loveCount + 1
            })
        }
    }

    addHuhCount = () => {
        if (this.state.huhCount === 5){
            alert("You may need to study more programming and come back later.")
        } else {
            this.setState({
                huhCount: this.state.huhCount + 1
            })
        }
    }

    addSpareCount = () => {
        if (this.state.spareCount === 5){
            alert("You may not like 'em but at least you get 'em!")
        } else {
            this.setState({
                spareCount: this.state.spareCount + 1
            })
        }
    }

    render() {
        return(
            <div className="quote-box" id="quote-box" style={{width: "100%"}}>
                
                <Quotes
                    setup={this.state.setup}
                    punchline={this.state.punchline}
                    newJoke={this.state.newJoke}
                    />
                
                <Buttons
                    getNewJoke={this.getNewJoke}
                    getPunchline={this.getPunchline}
                    newJoke={this.state.newJoke}
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