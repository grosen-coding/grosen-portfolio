import styled from "styled-components";
import React from "react";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../sections/Hero";
import NavBar from "./NavBar";

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
  height: 100vh;
  width: 100%;
  background-image: url("../img/background/6.jpg");
  background-position: center;
  background-position: cover;
  background-repeat: no-repeat;
  color: white;
  font-family: var(--font-title);
  border: 1px solid red;

  &:before {
    position: absolute;
    bottom: 0px;
    left: 0;
    content: "";
    width: 100%;
    height: 50%;
    background-image: linear-gradient(rgba(23, 26, 29, 0), rgba(23, 26, 29, 1));
    z-index: 1;
  }

  &:after {
    position: absolute;
    top: 0px;
    left: 0;
    content: "";
    width: 100%;
    height: 50%;
    background-image: linear-gradient(rgba(23, 26, 29, 1), rgba(23, 26, 29, 0));
    z-index: -1;
  }
`;
// -------WRAPPER---------
const Wrap = styled.div`
  width: 1300px;
  max-width: 100%;
  margin: 0 auto;
  height: 100%;
  border: 1px solid green;
`;
