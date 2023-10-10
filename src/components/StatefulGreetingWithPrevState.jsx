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
        this.setState((prevState, prevProps) => {
            return {
                introduction: prevState.introduction === "Hello" ? "Goodbye" : "Hello",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit"
            }
        })
    }

    handleIncrement() {
        this.setState((prevState, prevProps) => {
            console.log("Previous state:", prevState),
            console.log("Previous props:", prevProps)
            return {
                incrementText: prevState.incrementText + 1
            }
        })
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