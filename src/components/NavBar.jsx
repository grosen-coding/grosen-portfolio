import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";
import HamburgerNav from "./HamburgerNav";
import { device } from "./device";

function NavBar() {
  const [showNav, setShowNav] = useState(true);

  window.addEventListener("scroll", function (e) {
    let nav = document.getElementById("navbar");
    if (
      document.documentElement.scrollTop ||
      document.body.scrollTop > window.innerHeight
    ) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  return (
    <Nav id="navbar">
      <NavWrapper>
        <Logo>
          <a href="/">GSRCoding</a>
        </Logo>

        <HamburgerNav />

        <NavMenu className="nav-menu" showNav={showNav}>
          <ul className="navbar-links">
            <li className="nav-link">
              <a href="#about">About</a>
            </li>
            <li className="nav-link">
              <a href="#what-i-do">What I Do</a>
            </li>
            <li className="nav-link">
              <a href="#skills">Skills</a>
            </li>
            <li className="nav-link">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-link">
              <a href="#resume">Resume</a>
            </li>
            <li className="nav-link">
              <a href="#services">Services</a>
            </li>
            <li className="nav-link">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </NavMenu>
      </NavWrapper>
    </Nav>
  );
}

export default NavBar;

// ------NAVBAR--------
// const Wrapper = styled.div`
//   width: 100vw;
//   height: 80px;
// `;

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  /* padding: 0 30px; */
  /* border: 1px solid yellow; */
  /* position: -webkit-sticky; */
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  background: linear-gradient(to bottom, #000, #0003 70%, #0000);
  transition: background 0.9s; /* control how smooth the background changes */

  &.scrolled {
    background: #0a0a0a;
    /* transition: background 0.9s; */
  }

  a {
    transition: 0.25s;
    letter-spacing: 1.1px;
  }

  a:hover {
    color: var(--color-primary);
  }
`;

const NavWrapper = styled.div`
  width: var(--section-wrap-width);
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`;

const Logo = styled.div`
  width: 20%;
  /* text-transform: uppercase; */
  font-size: 1.8rem;
`;

// --------NAV MENU---------
const NavMenu = styled.div`
  width: 80%;
  height: 100%;

  @media ${device.mobileL} {
    display: none;
  }

  ul {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      list-style: none;
      text-transform: uppercase;
      font-size: 1.5rem;
      padding: 0 25px;
    }
  }
`;
