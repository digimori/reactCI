import React, { component } from 'react'

class StatefulGreeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            introduction: 'Hello',
            buttonText: 'Exit',
            incrementText: 0,
        }
    }

    handleClick() {
        this.setState({
            introduction: this.state.introduction === "Hello" ? "Goodbye" : "Hello",
            buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
        }), ()=>{
            console.log("New state", this.state.introduction)
        }
    }

    handleIncrement() {
        this.setState({
            incrementText: this.state.incrementText + 1,
        }), ()=>{
            console.log("Increment", this.state.increment)
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.introduction}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.handleIncrement()}>{this.state.incrementText}</button>
            </div>
        )
    }
}

export default StatefulGreeting