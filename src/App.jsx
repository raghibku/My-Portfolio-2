import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import PortfolioR from './components/PortfolioR'
import Skills from './components/Skills'
import Contact from './components/Contact'
import SocialLinks from './components/SocialLinks'


function App() {
  

  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <PortfolioR/>
      <Skills/>
      <Contact/>
      <SocialLinks/>
    </div>
  )
}

export default App
