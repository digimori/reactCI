import { useState } from 'react'
import css from './App.module.css';
import FunctionalGreeting from './components/FunctionalGreeting'
import Sidebar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';


function App() {

  return (
      <div className={css.App}>
       {/* <Sidebar />
        <NavBarSimple />*/}
    <EventsClass />
    <EventsFunctional />
        {/*<StatefulGreetingWithPrevState />
        /*<FunctionalGreeting greeting="Heeeeey" name="Cee" age="31" />*/}

      </div>
  )
}

export default App
