import React, { Component } from 'react'

export class LifeCyclesCDU extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         greeting: 'Hello!'
      }
    }

updateGreeting = () =>{
    // Toggle state
    this.setState(prevState => {
        return {
            greeting: prevState.greeting === "Hello!" ? "Goodbye" : "Hello!"
        }
    })
}
componentDidUpdate() {
    // Calls after component has updated, skipping the constructor step on the rendering.
    console.log("Component Updated")
}

  render() {
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <button onClick={this.updateGreeting}>Update Method</button>
      </div>
    )
  }
}

export default LifeCyclesCDU