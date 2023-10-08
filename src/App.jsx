import { useState } from 'react'
import './App.css'
import StatefulGreeting from './StatefulGreeting'
import FunctionalGreeting from './FunctionalGreeting'
import HookCounter from './HookCounter'

function App() {

  return (
      <div>
        <StatefulGreeting />
        <FunctionalGreeting />
        <HookCounter />
      </div>
  )
}

export default App
