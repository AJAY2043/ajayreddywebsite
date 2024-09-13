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

const Sections = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Blogs/>
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
