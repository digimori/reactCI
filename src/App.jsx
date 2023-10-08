import { useState } from 'react'
import './App.css'
import StatefulGreeting from './StatefulGreeting'
import FunctionalGreeting from './FunctionalGreeting'
import HookCounter from './HookCounter'

function App() {

  return (
      <div>
        <StatefulGreeting name="Ginny" />
        <FunctionalGreeting name="Cee" />
        <HookCounter name="John" />
      </div>
  )
}

export default App
