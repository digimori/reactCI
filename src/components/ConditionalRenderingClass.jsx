import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
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
        <h1>{this.state.isLoaded ? "Loaded" : "Not loaded"}</h1>
        <button>{this.state.isLoggedIn ? "Welcome user" : "Sign up"}</button>
        {this.state.isLoggedIn ? (
            <div>
                <p>Welcome! Please complete the following steps:</p>
                <ol>
                    <li>Confirm your email</li>
                    <li>Complete your profile</li>
                    <li>Subscribe to the newsletter</li>
                </ol>
            </div>
        ) : (
            <p>Please sign up</p>
        )}
        </div>
    )
  }
}

export default ConditionalRenderingClass