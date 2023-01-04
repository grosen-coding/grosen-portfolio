import styled from "styled-components";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../sections/Hero";
import NavBar from "./NavBar";
import { device } from "../components/device";

AOS.init({
  offset: 200,
  duration: 800,
  easing: "ease-in-out-sine",
  mirror: true,
});

function Header() {
  return (
    <Container id="header">
      <NavBar />
      <Wrap>
        <Hero />
      </Wrap>
    </Container>
  );
}

export default Header;

// -------HEADER--------
const Container = styled.header`
  height: 95vh;
  width: 100%;
  background-image: url("../img/6.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  font-family: var(--font-title);
  position: relative;
  overflow: hidden;

  @media ${device.mobileL} {
    padding: 0 20px;
  }

  &:after {
    content: "";
    width: 100%;
    bottom: 0;
    left: 0;
    height: 10%;
    background: linear-gradient(to top, #000, #0003 70%, #0000);
    position: absolute;
    z-index: 5;
  }
`;
// -------WRAPPER---------
const Wrap = styled.div`
  width: var(--section-wrap-width);
  max-width: 100%;
  margin: 0 auto;
  height: 100%;

  @media ${device.mobileL} {
    width: 100%;
  }
`;
