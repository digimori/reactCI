import { useState } from 'react'
import css from './App.module.css';
import FunctionalGreeting from './components/FunctionalGreeting'
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import StatefulGreeting from './components/StatefulGreeting';


function App() {

  return (
      <div className={css.App}>
        <Sidebar />
        <Navbar />
        <StatefulGreeting greeting="Yellow!" />
        {/*<FunctionalGreeting greeting="Heeeeey" name="Cee" age="31" />*/}

      </div>
  )
}

export default App
