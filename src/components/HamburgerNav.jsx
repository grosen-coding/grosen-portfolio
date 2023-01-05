import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";
import { device } from "./device";

const HamburgerNav = () => {
  const [showNav, setShowNav] = useState(true);

  return (
    <>
      <HamMenu className="hamburger-nav" showNav={showNav}>
        <MenuWrap>
          <ul className="hamburger-navbar-links">
            <li className="hamburger-nav-link">
              <a href="#header" onClick={() => setShowNav((prev) => !prev)}>
                Home
              </a>
            </li>
            <li className="hamburger-nav-link">
              <a href="#about" onClick={() => setShowNav((prev) => !prev)}>
                About
              </a>
            </li>
            <li className="hamburger-nav-link">
              <a href="#what-i-do" onClick={() => setShowNav((prev) => !prev)}>
                What I Do
              </a>
            </li>
            <li className="hamburger-nav-link">
              <a href="#skills" onClick={() => setShowNav((prev) => !prev)}>
                Skills
              </a>
            </li>
            <li className="hamburger-nav-link">
              <a href="#portfolio" onClick={() => setShowNav((prev) => !prev)}>
                Portfolio
              </a>
            </li>
            <li className="hamburger-nav-link">
              <a href="#resume" onClick={() => setShowNav((prev) => !prev)}>
                Resume
              </a>
            </li>
            <li className="hamburger-nav-link">
              <a href="#services" onClick={() => setShowNav((prev) => !prev)}>
                Services
              </a>
            </li>
            <li className="hamburger-nav-link">
              <a href="#contact" onClick={() => setShowNav((prev) => !prev)}>
                Contact
              </a>
            </li>
          </ul>
        </MenuWrap>
      </HamMenu>
      <HamburgerDiv
        className="nav-toggle"
        onClick={() => setShowNav((prev) => !prev)}
      >
        <GiHamburgerMenu className="nav-icon" />
      </HamburgerDiv>
    </>
  );
};

export default HamburgerNav;

const HamMenu = styled.div`
  opacity: ${(props) => (props.showNav ? "0" : "1")};
  background-color: rgba(0, 0, 0, 0.9);
  width: 100vw;
  height: 100%;
  border-radius: 30px;
  top: 0;
  left: 0;
  position: fixed;
  transform: ${(props) => (props.showNav ? "scale(0)" : "scale(1)")};
  transition: all 0.2s ease-in-out;
`;

const MenuWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    li {
      font-size: 2rem;
      font-family: var(--font-title);
      padding: 10px 60px;
      text-align: center;
      border-bottom: 1px solid #fedd7951;

      &:first-child {
        border-top: 1px solid #fedd7951;
      }

      a {
        letter-spacing: 2px;
        text-transform: uppercase;
        font-weight: 300;

        @media ${device.mobileL} {
          font-size: 2.6rem;
        }
      }
    }
  }
`;

const HamburgerDiv = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  top: 25px;
  right: 20px;
  display: none;

  @media ${device.mobileL} {
    display: block;
  }

  .nav-icon {
    font-size: 3rem;
    cursor: pointer;
  }
`;
