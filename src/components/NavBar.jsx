import React from "react";
import styled from "styled-components";
import HamburgerNav from "./HamburgerNav";
import { device } from "./device";

function NavBar() {
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

        <NavMenu>
          <ul className="navbar-links link-1">
            <li className="nav-link">
              <a href="#about">
                About<span></span>
                <span></span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#what-i-do">
                What I Do<span></span>
                <span></span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#skills">
                Skills<span></span>
                <span></span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#portfolio">
                Portfolio<span></span>
                <span></span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#resume">
                Resume<span></span>
                <span></span>
              </a>
            </li>

            <li className="nav-link">
              <a href="#contact">
                Contact<span></span>
                <span></span>
              </a>
            </li>
          </ul>
        </NavMenu>
      </NavWrapper>
    </Nav>
  );
}

export default NavBar;

const Nav = styled.nav`
  height: 80px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  background: linear-gradient(to bottom, #000, #0003 70%, #0000);
  transition: background 0.9s;

  &.scrolled {
    background: rgba(22, 22, 22, 0.9);
  }

  a {
    transition: 0.25s;
    letter-spacing: 1.1px;
  }

  a:hover,
  a:focus,
  a:active {
    color: var(--color-primary);
  }
`;

const NavWrapper = styled.div`
  width: var(--section-wrap-width);
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`;

const Logo = styled.div`
  width: 20%;
  font-size: 1.8rem;
  opacity: 0;
  animation: logoFade 2s linear forwards;
  transform-origin: left;

  a {
    color: var(--color-yellow);
    font-weight: 500;
  }

  @media ${device.tablet} {
    width: 10%;
  }
`;

// --------NAV MENU---------
const NavMenu = styled.div`
  width: 80%;
  height: 100%;

  @media ${device.tablet} {
    width: 85%;
  }

  @media ${device.mobileL} {
    display: none;
  }

  ul {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${device.tablet} {
      justify-content: flex-end;
    }

    li {
      list-style: none;
      text-transform: uppercase;
      font-size: 1.5rem;
      padding: 0 20px;
      opacity: 0;
      /* animation: navLinks 2s forwards; */

      &:first-child {
        animation: navLinks 3s forwards;
        animation-delay: 3.5s;
      }

      &:nth-child(2) {
        animation: navLinks 3s forwards;
        animation-delay: 2.2s;
      }

      &:nth-child(3) {
        animation: navLinks 3s forwards;
        animation-delay: 4s;
      }
      &:nth-child(4) {
        animation: navLinks 2s forwards;
        animation-delay: 2.6s;
      }
      &:nth-child(5) {
        animation: navLinks 2s forwards;
        animation-delay: 2.8s;
      }
      &:nth-child(6) {
        animation: navLinks 2s forwards;
        animation-delay: 4.2s;
      }
      &:nth-child(7) {
        animation: navLinks 2s forwards;
        animation-delay: 3.3s;
      }

      @media ${device.laptop} {
        font-size: 1.3rem;
      }

      @media ${device.tablet} {
        font-size: 1.5rem;
        padding: 0;
      }

      a {
        display: inline-block;

        span:first-child:before {
          content: "";
          position: absolute;
          top: 0;
          left: 30px;
          width: 8px;
          height: 8px;
          background-color: transparent;
          border-top: 2px solid var(--color-primary);
          border-left: 2px solid var(--color-primary);
          transition: 0.4s;
          opacity: 0;
        }

        span:first-child:after {
          content: "";
          position: absolute;
          top: 0;
          right: 30px;
          width: 8px;
          height: 8px;
          background-color: transparent;
          border-top: 2px solid var(--color-primary);
          border-right: 2px solid var(--color-primary);
          transition: 0.4s;
          opacity: 0;
        }

        span:last-child:before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 30px;
          width: 8px;
          height: 8px;
          background-color: transparent;
          border-bottom: 2px solid var(--color-primary);
          border-left: 2px solid var(--color-primary);
          transition: 0.4s;
          opacity: 0;
        }

        span:last-child:after {
          content: "";
          position: absolute;
          bottom: 0;
          right: 30px;
          width: 8px;
          height: 8px;
          background-color: transparent;
          border-bottom: 2px solid var(--color-primary);
          border-right: 2px solid var(--color-primary);
          transition: 0.4s;
          opacity: 0;
        }

        &:hover span:first-child:before {
          top: -5px;
          left: 5px;
          opacity: 1;
        }

        &:hover span:first-child:after {
          top: -5px;
          right: 5px;
          opacity: 1;
        }

        &:hover span:last-child:before {
          bottom: -5px;
          left: 5px;
          opacity: 1;
        }

        &:hover span:last-child:after {
          bottom: -5px;
          right: 5px;
          opacity: 1;
        }
        @media ${device.tablet} {
          padding: 0 8px;
        }
      }
    }
  }
`;
