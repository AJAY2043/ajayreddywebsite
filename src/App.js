import React from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LandingPage from './Components/Project/LandingPage'
import StartUpIdea from './Pages/StartupIdea/StartUpIdea'
import MyProjects from './Pages/MyProjects/MyProjects'
import Collabrations from './Pages/Collabrations/Collabrations'
import ContactMe from './Pages/ContactMe/ContactMe'
import AboutMe from './Pages/AboutMe/AboutMe'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/aboutme' element={<AboutMe/>}/>
      <Route path='/mystartupideas' element={<StartUpIdea/>}/>
      <Route path='/myprojects' element={<MyProjects/>}/>
      <Route path='/collabrations' element={<Collabrations/>}/>
      <Route path='/contactme' element={<ContactMe/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
