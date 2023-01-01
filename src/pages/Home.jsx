import styled from "styled-components";
import About from "../sections/About";
import WhatIDo from "../sections/WhatIDo";
import Skills from "../sections/Skills";
import Portfolio from "../sections/Portfolio";
import Resume from "../sections/Resume";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../sections/Hero";

import React from "react";

function Home() {
  return (
    <>
      <Header />

      <About />
      <WhatIDo />
      <Skills />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
