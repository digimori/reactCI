import React from 'react'

function UserData(props) {
  return (
    <div>
    {props.isLoaded ? (
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
    )}</div>
  )
}

export default UserData