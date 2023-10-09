import React from 'react'

const FunctionalGreeting = (props) => {
  return (
    <div>{props.greeting}, {props.name}, I see that you're {props.age}</div>
  )
}

export default FunctionalGreeting


/* This is Stateless.
That means that this component does not change and can be used for just unchanging code, like static headers and such.
*/