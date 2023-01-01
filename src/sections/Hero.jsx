import React from "react";
import styled from "styled-components";
import Typed from "react-typed";
import AOS from "aos";
import { Link } from "react-router-dom";

AOS.init({
  offset: 200,
  duration: 800,
  easing: "ease-in-out-sine",
  delay: 200,
  mirror: true,
});

function Hero() {
  return (
    <LandingPage>
      <h3>Welcome to my Portfolio</h3>
      <h2
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease"
        data-aos-once="true"
      >
        Gary Rosen
      </h2>
      <h1
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-duration="1000"
        data-aos-easing="ease"
        data-aos-once="true"
      >
        <Typed
          strings={["a Freelancer, ", "a Designer,", "and a Programmer."]}
          startDelay={2000}
          typeSpeed={80}
          backSpeed={30}
          backDelay={1200}
          loop
        />
      </h1>

      <Button>
        <a href="#resume">My Resume</a>
      </Button>
    </LandingPage>
  );
}

export default Hero;

// Landing Page
const LandingPage = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding-top: 20%;
  padding-left: 30px;
  text-transform: uppercase;

  h1 {
    font-size: 5rem;
    color: var(--color-primary);
  }

  h2 {
    font-size: 4.5rem;
    padding-bottom: 0;
    margin-bottom: -20px;
  }

  h3 {
    font-weight: 300;
    letter-spacing: 5px;
    padding-bottom: 30px;
  }
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  margin-top: 40px;
  background-color: var(--color-primary);
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;

  a {
    text-transform: uppercase;
    font-weight: 500;
  }
`;
