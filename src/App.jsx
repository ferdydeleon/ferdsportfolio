import { useState } from 'react'

import Nav from './components/nav';
import Home from './components/home';
import Work from './components/work';
import Project from './components/project';
import Contact from './components/contact';
import Resume from './components/resume';

function App() {

  return (
    <>
      <div>
        <Nav/>
        <Home/>
        <Work/>
        <Project/>
        <Contact/>
        <Resume/>
      </div>
    </>
  )
}

export default App
