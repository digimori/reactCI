import { useState } from 'react'
import css from './App.module.css';
import FunctionalGreeting from './components/FunctionalGreeting'
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';


function App() {

  return (
      <div className={css.App}>
        <Sidebar />
        <Navbar />
        {/*<FunctionalGreeting greeting="Heeeeey" name="Cee" age="31" />*/}

      </div>
  )
}

export default App
