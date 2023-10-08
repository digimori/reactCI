import React from 'react'

export default class StatefulGreeting extends React.Component {
  constructor(props) {
    //super(props) calls the constructor
    super(props);
    this.state = {
      count: 0
    };
  }
// This is a function that will get called to just increment the counter every time it is clicked.
  setCount = () => {
    this.setState(prev => {
      return {
        count: prev.count + 1
      }
    })
  }
  render() {
    return (
      <div className='greeting'>
        <h1>Hello {this.props.name}, I am a stateful component.</h1>
        <h2>You've clicked {this.state.count} times</h2>
        <button onClick={this.setCount}>Increment Count</button>
      </div>     
    )
  }
}