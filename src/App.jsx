import { useState } from 'react'
import css from './App.module.css';
import FunctionalGreeting from './components/FunctionalGreeting'
import Sidebar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import EventBinding from './components/EventBinding';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import NestedComponents from './components/NestedComponents';
import MethodsAsPropsChild from './components/MethodsAsPropsChild';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';
import NavBarForm from './components/NavBarForm';


function App() {

  return (
      <div className={css.App}>
        <NavBarForm />
        <Sidebar />
        {/*<MethodsAsPropsParent />
        <NestedComponents />
        <NavBarSimple />
        <ConditionalRenderingClass isLoaded={false} />
        <ConditionalRenderingFunctional connected={false} />
        
        
    <EventsClass />
    <EventsFunctional />
        {/*<StatefulGreetingWithPrevState />
        /*<FunctionalGreeting greeting="Heeeeey" name="Cee" age="31" />
  <EventBinding />*/}

      </div>
  )
}

export default App
