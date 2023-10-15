import React from 'react';

function UserMessage(props) {
  return (
    <div><h1>{props.isLoaded ? "Loaded" : "Not loaded"}</h1>
    <button>{props.isLoggedIn ? "Welcome user" : "Sign up"}</button>
    </div>
  )
}

export default UserMessage