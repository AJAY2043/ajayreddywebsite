import React from 'react'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import UserStories from '../UserStories/UserStories'
import Testimonials from '../Testmonals/Testimonials'
import NewsLetter from '../NewsLetter/NewsLetter'
import FAQ from '../FAQ/FAQ'
import Contact from '../Contact/Contact'
import Blogs from '../Blog/Blog'
import Services from '../Services/Services'
import Clients from '../Services/Clients.jsx'

const Sections = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Blogs/>
      <Services/> 
      <Clients/>
      <Portfolio/>
      <UserStories/>
      <Testimonials/>
      <NewsLetter/>
      <FAQ/>
      <Contact/>
    </div>
  )
}

export default Sections
