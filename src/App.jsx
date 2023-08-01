import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'

function App() {
  

  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Skills/>
    </div>
  )
}

export default App
