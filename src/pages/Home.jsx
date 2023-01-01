import styled from "styled-components"
import Hero from "../sections/Hero"
import About from "../sections/About"
import WhatIDo from "../sections/WhatIDo"
import Skills from "../sections/Skills"
import Portfolio from "../sections/Portfolio"
import Resume from "../sections/Resume"
import Contact from "../sections/Contact"
import Footer from "../components/Footer"

import React from 'react'

function Home() {
  return (
    <MainContainer>
      
      <Hero />
      <About />
      <WhatIDo />
      <Skills />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />

    </MainContainer>
  )
}

export default Home

const MainContainer = styled.main`
  
`