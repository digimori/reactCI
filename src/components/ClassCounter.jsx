import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    handleClick = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1}
        })
    }

  render() {
    return (
      <div>
        <h1>Hi, you clicked me {this.state.count} times!</h1>
        <button onClick={this.handleClick}>Incrementing</button>
      </div>
    )
  }
}

export default ClassCounter