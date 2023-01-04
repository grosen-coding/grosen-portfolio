import React from "react";
import styled from "styled-components";
import Typed from "react-typed";
import AOS from "aos";
import { device } from "../components/device";

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
      <TitleWrap>
        <h3>Welcome to my Portfolio</h3>
        <h2
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          Gary Rosen
        </h2>
        <h1
          data-aos="fade-left"
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

        <ResumeBtnDiv
          data-aos="fade-down"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <Button>
            <a href="#resume">My Resume</a>
          </Button>
          <DownArrowDiv>
            <DownArrow src="../img/down-arrow.svg" className="down-arrow" />
          </DownArrowDiv>
        </ResumeBtnDiv>
      </TitleWrap>

      {/* <ScrollToTop /> */}
    </LandingPage>
  );
}

export default Hero;

// Landing Page
const LandingPage = styled.div`
  width: 100%;
  height: 100%;
`;

const TitleWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  padding-top: 100px;
  padding-left: 100px;

  @media ${device.mobileL} {
    padding: 100px 0 0;
    text-align: center;
    margin: 0;
  }

  h1 {
    font-size: 5rem;
    color: var(--color-primary);
    padding: 20px 0 30px;

    @media ${device.mobileL} {
      font-size: 2.8rem;
    }
  }

  h2 {
    font-size: 4.5rem;
    padding-bottom: 0;
    margin-bottom: -20px;

    @media ${device.mobileL} {
      font-size: 6rem;
    }
  }

  h3 {
    font-weight: 300;
    letter-spacing: 5px;
    padding-bottom: 30px;
    text-transform: uppercase;

    @media ${device.mobileL} {
      font-size: 2rem;
    }
  }
`;

const ResumeBtnDiv = styled.div`
  display: inline-block;
  width: 20%;
  position: relative;
  z-index: 2;
  margin-top: 40px;

  @media ${device.mobileL} {
    margin: 40px auto 0;
    width: 80%;
    display: block;
  }
`;

const Button = styled.button`
  width: 100%;
  height: auto;
  background-color: var(--color-primary);
  border-radius: 10px;
  padding: 12px;
  display: inline-block;
  z-index: 5;
  cursor: pointer;
  transition: all 0.3s;
  border: none;

  &:hover {
    background-color: #e2e2e2;
    transition: 0.3s;
  }

  &:hover a {
    color: var(--color-primary);
    transition: 0.3s;
  }

  a {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    font-family: var(--font-title);
    letter-spacing: 1.5px;
    transition: 0.3s;
  }
`;

// Down-ARROW
const DownArrowDiv = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  opacity: 0;
  animation: arrowOpacity forwards 2s;
  animation-delay: 2s;
`;

const DownArrow = styled.img`
  height: 100%;
  width: 100%;
  display: block;
  position: relative;
  left: 50%;
  animation: bounceDown infinite 2s;
  animation-delay: 2s;
`;
