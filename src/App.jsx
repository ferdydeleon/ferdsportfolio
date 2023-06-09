import { useState } from 'react'

import Nav from './components/nav';
import Home from './components/home';
import Work from './components/work';
import Project from './components/project';

function App() {

  return (
    <>
      <div>
        <Nav/>
        <Home/>
        <Work/>
        <Project/>
      </div>
    </>
  )
}

export default App
