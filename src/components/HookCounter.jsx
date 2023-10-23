import React, {useState} from 'react'

function HookCounter(props) {
    const [count, setCount] = useState(0)

  return (
    <div>
        <h1>I'm a functional component with hooks!</h1>
        <h2>You have clicked {count} times</h2>
        <button onClick={() => setCount(count => count + 1)}>Increment Counter</button>
    </div>
  )
}

export default HookCounter