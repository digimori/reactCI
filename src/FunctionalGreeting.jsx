import React from 'react'

//Stateless functional component - Best used for static rendering
export default function FunctionalGreeting(props) {
    return (
        <div className='greeting'>
            <h1>Hello {props.name}</h1>
            <h2>I am a simple component</h2>
        </div>
    )
}