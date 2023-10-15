import React, { Component } from 'react';
import UserMessage from './UserMessage';
import UserData from './UserData';

export class NestedComponents extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: true,
         isLoggedIn: true
      }
    }
  render() {
    return (
      <div>
        <UserMessage isLoggedIn={this.state.isLoggedIn} />
        <UserData isLoaded={this.state.isLoaded} />
        </div>
    )
  }
}

export default NestedComponents