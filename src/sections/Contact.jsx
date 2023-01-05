import React from "react";
import styled from "styled-components";
import { device } from "../components/device";

function Contact() {
  return (
    <Container id="contact">
      <Wrap>
        <h2>
          <span>Get in Touch With Me</span>
          <div></div>
        </h2>
        <ContactFormDiv>
          <ContactForm className="contact-form">
            <FormGroup className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Name"
                required
              />
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="E-mail Address"
                required
              />
              <input
                type="phone"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                required
              />
            </FormGroup>
            <FormGroup className="form-group">
              <textarea
                type="textarea"
                placeholder="Please type your message"
                className="form-text-area"
                required
              />
            </FormGroup>
            <FormGroup className="form-group">
              <SubmitButton className="btn btn-block">Submit</SubmitButton>
            </FormGroup>
          </ContactForm>
        </ContactFormDiv>
      </Wrap>
    </Container>
  );
}

export default Contact;

const Container = styled.section`
  height: 100%;
  width: 100%;
  background-image: url("../img/contact-bg.jpg");
  background-position: center left 30%;
  background-size: cover;
  background-repeat: no-repeat;
  font-family: var(--font-title);
  padding-bottom: 60px;
  position: relative;
  overflow: hidden;

  @media ${device.mobileL} {
    padding-bottom: 20px;
  }

  position: relative;

  &:before {
    content: "";
    width: 100%;
    bottom: 0;
    left: 0;
    height: 20%;
    background: linear-gradient(to top, #000, #0003 70%, #0000);
    position: absolute;
    z-index: 5;
  }

  &:after {
    content: "";
    width: 100%;
    top: 0;
    left: 0;
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

  h2 {
    margin-top: 20px;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 2.5rem;
    letter-spacing: 0.8px;
    position: relative;
    z-index: 10;
    text-align: center;
    color: var(--color-yellow);

    @media ${device.tablet} {
      font-size: 2.3rem;
    }

    @media ${device.mobileL} {
      margin-top: 0;
    }
    > div {
      height: 1px;
      width: 40%;
      background-color: grey;
      margin: 40px auto 45px;
      position: relative;
      overflow: hidden;

      @media ${device.tablet} {
        margin: 20px auto 30px;
      }

      @media ${device.mobileL} {
        margin: 20px auto;
      }

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

const ContactFormDiv = styled.div`
  width: 100%;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 70%;
  padding: 20px 0 40px;
  position: relative;
  z-index: 7;

  @media ${device.tablet} {
    width: 90%;
  }

  @media ${device.mobileL} {
    width: 90%;
  }

  input,
  textarea {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    border: 1px solid grey;
    border-radius: 3px;
    padding: 10px;
    color: #e2e2e2;
    font-family: var(--font-title);
    letter-spacing: 0.5px;
    margin: 10px;

    &::placeholder {
      @media ${device.mobileL} {
        font-size: 1.2rem;
      }
    }
  }
  textarea {
    resize: none;
    height: 300px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  width: 100%;

  @media ${device.mobileL} {
    flex-direction: column;
    align-items: center;
  }
`;

const SubmitButton = styled.button`
  width: 50%;
  height: auto;
  background-color: var(--color-primary);
  font-family: var(--font-title);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1.5rem;
  border-radius: 10px;
  font-weight: 500;
  padding: 12px;
  display: inline-block;
  z-index: 5;
  cursor: pointer;
  transition: all 0.3s;
  border: none;
  margin: 0 auto;
  margin-top: 15px;
  color: #e2e2e2;

  &:hover {
    background-color: #e2e2e2;
    transition: 0.3s;
    color: var(--color-primary);
  }

  &:hover a {
    color: var(--color-primary);
    transition: 0.3s;
  }
`;
