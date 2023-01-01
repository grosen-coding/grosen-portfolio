import styled from 'styled-components'
import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { useState } from 'react';

function Header() {

    const [showNav, setShowNav] = useState(true);

  return (
    <Container>
      <Wrap>

        <Nav>
          <Logo>
            GSRCoding
          </Logo>

          <NavMenu className='navbar' showNav={showNav}>
              <ul className='navbar-links'>
                  <li className='nav-link'><a href={"#about"} onClick={() => setShowNav((prev) => !prev)}>About</a></li>
                  <li className='nav-link'><a href={"#whatido"} onClick={() => setShowNav((prev) => !prev)}>What I Do</a></li>
                  <li className='nav-link'><a href={"#skills"} onClick={() => setShowNav((prev) => !prev)}>Skills</a></li>
                  <li className='nav-link'><a href={"#portfolio"} onClick={() => setShowNav((prev) => !prev)}>Portfolio</a></li>
                  <li className='nav-link'><a href={"#resume"} onClick={() => setShowNav((prev) => !prev)}>Resume</a></li>
                  <li className='nav-link'><a href={"#contact"} onClick={() => setShowNav((prev) => !prev)}>Contact</a></li>
              </ul>
          </NavMenu>
        </Nav>

      </Wrap>
    </Container>
  )
}

export default Header

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
`
const Wrap = styled.div`
  width: 1300px;
  max-width: 100%;
  margin: 0 auto;
  height: 100%;
  border: 1px solid green;
`

const Nav = styled.nav`
  display: flex;
  height: 80px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  border: 1px solid yellow;

`

const Logo = styled.div`
  width: 20%;
  /* text-transform: uppercase; */
  font-size: 1.8rem;
`

const NavMenu = styled.div`
  width: 80%;
  height: 100%;

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
    /* transform: ${({showNav}) => ({showNav} ? "translateX(-100%)" : "translateX(0)")};
    transition: transform 0.3s ease-in-out */
  `