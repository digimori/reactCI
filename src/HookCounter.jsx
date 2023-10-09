import React from 'react'
import { useState } from 'react'

// Hooks will allow stateless functional components to act like Stateful class components
export default function HookCounter(props) {
// count: a new state property
// setCount: method to update the count
// useState(0) - Initialize count at 0 kinda like writing let count = 0;
//This pretty much eliminates the need for the constructor/super methods.

    const [count, setCount] = useState(0)
    return (
        <div className='greeting'>
            <h1>Hello {props.name}, I am a functional Hook component!</h1>
            <h2>You have clicked the counter {count} times.</h2>
            <button onClick={() => setCount(count => count + 1)}>This button is, onClick, setting the count on each press</button>
        </div>
    )
}