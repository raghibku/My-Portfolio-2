import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import PortfolioGif from './components/PortfolioGif'
import Skills from './components/Skills'
import Contact from './components/Contact'
import SocialLinks from './components/SocialLinks'


function App() {
  

  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <PortfolioGif/>
      <Skills/>
      <Contact/>
      <SocialLinks/>
    </div>
  )
}

export default App
