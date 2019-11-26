import React from 'react';
import Quotes from './Quotes';
import Buttons from './Buttons';
<<<<<<< HEAD
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
=======

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
    },
    {
        quote: "All I thought about when I wrote my stories was, “I hope that these comic books would sell so I can keep my job and continue to pay the rent.” Never in a million years could I have imagined that it would turn into what it has evolved into nowadays. Never.",
        author: "Bill Lee"
    },
    {
        quote: "I’ve been very lucky. All I wanted was to pay the rent. Then these characters took off and suddenly there were Hulk coffee mugs and Iron Man lunchboxes and The Avengers sweatshirts everywhere. Money’s okay, but what I really like is working.",
        author: "Marvin Lee"
    },
    {
        quote: "I never thought that Spider-Man would become the world wide icon that he is. I just hoped the books would sell and I’d keep my job.",
        author: "Jerry Lee"
    },
    {
        quote: "When you work with people whom you like and you admire because they’re so good at what they do, it doesn’t feel like work. It’s like you’re playing.",
        author: "Jack Lee"
    },
    {
        quote: "There’s never a time when I’m not working. I don’t take vacations.",
        author: "Stewart Lee"
    },
    {
        quote: "I’m very proud of being a hack. It’s why I’ve lived as long as I have, I think.",
        author: "Stanly Lee"
    },
    {
        quote: "I used to be embarrassed because I was just a comic-book writer while other people were building bridges or going on to medical careers. And then I began to realize: entertainment is one of the most important things in people’s lives. Without it they might go off the deep end. I feel that if you’re able to entertain people, you’re doing a good thing.",
        author: "Eric Lee"
    },
    {
        quote: "Luck's a revolving door, you just need to know when it's your time to walk through.",
        author: "Miles Lee"
    },
    {
        quote: "The pleasure of reading a story and wondering what will come next for the hero is a pleasure that has lasted for centuries and, I think, will always be with us.",
        author: "Peter Lee"
    },
]

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
>>>>>>> 7fb0e13d265fca1f242856935f4c56d2137d52e0
            </div>
        )
    }
}

export default QuoteBox;