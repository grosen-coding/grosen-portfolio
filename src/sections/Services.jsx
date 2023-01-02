import React from "react";
import styled from "styled-components";
import { FaDesktop } from "react-icons/fa";
import { ImMobile } from "react-icons/im";
import { MdDeveloperBoard } from "react-icons/md";
import { AiOutlineLock } from "react-icons/ai";
import { AiOutlineCoffee } from "react-icons/ai";
import { GiPencilBrush } from "react-icons/gi";

function Services() {
  return (
    <Container id="services">
      <Wrap>
        <h1>
          <span>Services I Offer</span>
          <div></div>
        </h1>
        <ServicesWrap>
          <div className="service-card">
            <div className="service-icon">
              <FaDesktop />
            </div>

            <h4>Desktop Apps</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              aliquam, nulla nam nobis error dolorum harum soluta molestias
              vitae sit distinctio modi ullam commodi doloremque? Deleniti
              facilis molestiae necessitatibus sint.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <ImMobile />
            </div>

            <h4>Mobile Apps</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              aliquam, nulla nam nobis error dolorum harum soluta molestias
              vitae sit distinctio modi ullam commodi doloremque? Deleniti
              facilis molestiae necessitatibus sint.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <MdDeveloperBoard />
            </div>

            <h4>Web Development</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              aliquam, nulla nam nobis error dolorum harum soluta molestias
              vitae sit distinctio modi ullam commodi doloremque? Deleniti
              facilis molestiae necessitatibus sint.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <AiOutlineLock />
            </div>

            <h4>Authentication & Security</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              aliquam, nulla nam nobis error dolorum harum soluta molestias
              vitae sit distinctio modi ullam commodi doloremque? Deleniti
              facilis molestiae necessitatibus sint.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <AiOutlineCoffee />
            </div>

            <h4>Web Consulting</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              aliquam, nulla nam nobis error dolorum harum soluta molestias
              vitae sit distinctio modi ullam commodi doloremque? Deleniti
              facilis molestiae necessitatibus sint.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <GiPencilBrush />
            </div>

            <h4>Custom Designs</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              aliquam, nulla nam nobis error dolorum harum soluta molestias
              vitae sit distinctio modi ullam commodi doloremque? Deleniti
              facilis molestiae necessitatibus sint.
            </p>
          </div>
        </ServicesWrap>
      </Wrap>
    </Container>
  );
}

export default Services;

const Container = styled.section`
  height: 100%;
  width: 100%;
  background-image: linear-gradient(rgba(23, 26, 29, 1), rgba(23, 26, 29, 0.9));
  background-position: center;
  background-position: cover;
  background-repeat: no-repeat;
  font-family: var(--font-title);
  padding-bottom: 60px;
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
        z-index: 2;
        background-color: var(--color-primary);
      }
    }
  }
  /* height: auto; */
`;

const ServicesWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .service-card {
    border: 1px solid #3f3f3f;
    margin: 20px;
    border-radius: 10px;
    background-color: #222;
    width: 400px;
    height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 30px;
    text-align: center;
    align-items: center;

    h4 {
      font-size: 1.8rem;
      letter-spacing: 0.7px;
    }
  }

  .service-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #3f3f3f;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-primary);
    font-size: 2rem;
  }
`;
