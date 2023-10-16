import React, { Component } from 'react'

export class Clock extends Component {
    // constructing the timer and its state
    constructor(props) {
        super(props)
        this.state =
            {date: new Date()};
            console.log("Constructor")
    }
    componentDidMount() {
        // Puts the timer on the DOM
        this.timerID = setInterval(() => this.tick(), 1000);
        console.log("componentDidMount")
    }
    componentDidUpdate() {
        // Runs on every time the tick() is called as it is updating the interval
        console.log("componentDidUpdate")
    }
    componentWillUnmount() {
        // This is clearing the timer before the component unmounts
        clearInterval(this.timerID)
        console.log("componentWillUnmount")
    }
    tick() {
        // Updating the state of the date object
        this.setState({
            date: new Date()
        });
        console.log("Tick!")
    }

  render() {
    return (
      <div>
        <h1>Your time now is:</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

export default Clock