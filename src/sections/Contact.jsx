import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <Container id="contact">
      <Wrap>
        <h1>
          <span>Get in Touch Me</span>
          <div></div>
        </h1>
        <ContactForm>
          <form action=""></form>
        </ContactForm>
      </Wrap>
    </Container>
  );
}

export default Contact;

const Container = styled.section`
  height: 600px;
  width: 100%;
  background-image: url("../img/contact-bg.jpg");
  background-position: center;
  background-position: cover;
  background-repeat: no-repeat;
  font-family: var(--font-title);
  padding-bottom: 60px;
  position: relative;
  /* border: 1px solid blue; */

  position: relative;

  &:before {
    content: "";
    width: 100%;
    bottom: 0;
    height: 20%;
    background: linear-gradient(to top, #000, #0003 70%, #0000);
    position: absolute;
    z-index: 5;
  }

  &:after {
    content: "";
    width: 100%;
    top: 0;
    height: 200px;
    background: linear-gradient(to bottom, #000, #0003 70%, #0000);
    position: absolute;
    z-index: 5;
  }
`;

const Wrap = styled.div`
  max-width: 100%;
  width: var(--section-wrap-width);
  padding-top: 50px;
  margin: 0 auto;
  height: 100%;
  color: #e2e2e2;

  h1 {
    margin-top: 20px;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 2rem;
    letter-spacing: 0.8px;
    position: relative;
    z-index: 10;
    /* position: relative; */
    text-align: center;
    > div {
      height: 1px;
      width: 40%;
      background-color: grey;
      margin: 40px auto 45px;
      position: relative;
      overflow: hidden;

      &:before {
        content: "";
        position: absolute;
        height: 50px;
        top: 50%;
        width: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 10px solid black;
        z-index: 1;
        background-color: var(--color-primary);
      }
    }
  }
`;

const ContactForm = styled.div``;
