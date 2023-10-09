import { useState } from 'react'
import css from './App.module.css';
import FunctionalGreeting from './components/FunctionalGreeting'
import Sidebar from './components/Sidebar'

function App() {

  return (
      <div className={css.App}>
        <Sidebar />
        {/*<FunctionalGreeting greeting="Heeeeey" name="Cee" age="31" />*/}

      </div>
  )
}

export default App
