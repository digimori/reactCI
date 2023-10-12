import React, { Component } from 'react'

export class EventsClass extends Component {
    clickHandlerClass() {
        console.log("Class clicked!")
    }
  render() {
    return (
      <div><button onClick={this.clickHandlerClass}>Click me! I'm a Class component!</button></div>
    )
  }
}

export default EventsClass