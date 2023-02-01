import About from "../sections/About";
import WhatIDo from "../sections/WhatIDo";
import Skills from "../sections/Skills";
import Portfolio from "../sections/Portfolio";
// import Resume from "../sections/Resume";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PreLoader from "../components/PreLoader";

import React from "react";
import ScrollButton from "../components/ScrollButton";

function Home() {
  return (
    <>
      <PreLoader />

      <Header />
      <ScrollButton />
      <About />
      <WhatIDo />
      <Skills />
      <Portfolio />
      {/* <Resume /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
