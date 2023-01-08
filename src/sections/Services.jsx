import React from "react";
import styled from "styled-components";
import { FaDesktop } from "react-icons/fa";
import { ImMobile } from "react-icons/im";
import { MdDeveloperBoard } from "react-icons/md";
import { AiOutlineLock } from "react-icons/ai";
import { AiOutlineCoffee } from "react-icons/ai";
import { GiPencilBrush } from "react-icons/gi";
import { FaBug } from "react-icons/fa";
import { SiElasticstack } from "react-icons/si";
import { device } from "../components/device";

function Services() {
  return (
    <Container id="services">
      <Wrap>
        <h2>
          <span>Services I Offer</span>
          <div
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          ></div>
        </h2>
        <ServicesWrap>
          <div
            className="service-card"
            data-aos="flip-down"
            data-aos-delay="200"
            data-aos-duration="700"
            data-aos-easing="ease"
          >
            <div className="service-icon-div">
              <FaDesktop />
            </div>

            <h4>Desktop Apps</h4>
          </div>
          <div
            className="service-card"
            data-aos="flip-down"
            data-aos-delay="300"
            data-aos-duration="700"
            data-aos-easing="ease"
          >
            <div className="service-icon-div">
              <ImMobile />
            </div>

            <h4>Mobile Apps</h4>
          </div>
          <div
            className="service-card"
            data-aos="flip-down"
            data-aos-delay="400"
            data-aos-duration="700"
            data-aos-easing="ease"
          >
            <div className="service-icon-div">
              <MdDeveloperBoard />
            </div>

            <h4>Web Development</h4>
          </div>
          <div
            className="service-card"
            data-aos="flip-down"
            data-aos-delay="500"
            data-aos-duration="700"
            data-aos-easing="ease"
          >
            <div className="service-icon-div">
              <AiOutlineLock />
            </div>

            <h4>Authentication & Security</h4>
          </div>
          <div
            className="service-card"
            data-aos="flip-down"
            data-aos-delay="600"
            data-aos-duration="700"
            data-aos-easing="ease"
          >
            <div className="service-icon-div">
              <AiOutlineCoffee />
            </div>

            <h4>Web Consulting</h4>
          </div>
          <div
            className="service-card"
            data-aos="flip-down"
            data-aos-delay="700"
            data-aos-duration="700"
            data-aos-easing="ease"
          >
            <div className="service-icon-div">
              <GiPencilBrush />
            </div>

            <h4>Custom Designs</h4>
          </div>

          <div
            className="service-card"
            data-aos="flip-down"
            data-aos-delay="800"
            data-aos-duration="700"
            data-aos-easing="ease"
          >
            <div className="service-icon-div">
              <FaBug />
            </div>
            <h4>Code Debugging</h4>
          </div>

          <div
            className="service-card"
            data-aos="flip-down"
            data-aos-delay="900"
            data-aos-duration="700"
            data-aos-easing="ease"
          >
            <div className="service-icon-div">
              <SiElasticstack />
            </div>
            <h4>Full-Stack Development</h4>
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
  /* background-image: linear-gradient(rgba(23, 26, 29, 1), rgba(23, 26, 29, 0.9)); */
  background-color: #000;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  font-family: var(--font-title);
  padding-bottom: 60px;
  position: relative;
  overflow: hidden;

  @media ${device.mobileL} {
    padding-bottom: 0;
    margin-top: -20px;
  }

  &:after {
    content: "";
    width: 100%;
    bottom: 0;
    left: 0;
    height: 120%;
    background: linear-gradient(to top, #000, #0003 100%, #0000);
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
  position: relative;
  z-index: 7;

  @media ${device.mobileL} {
    padding-top: 20px;
  }

  h2 {
    margin-top: 20px;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 2.5rem;
    letter-spacing: 0.8px;
    text-align: center;
    color: var(--color-yellow);

    @media ${device.tablet} {
      font-size: 2.3rem;
    }

    @media ${device.mobileL} {
      font-size: 2.6rem;
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
        z-index: 2;
        background-color: var(--color-primary);
      }
    }
  }
`;

const ServicesWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;

  .service-card {
    margin: 15px;
    border-radius: 10px;
    background-color: #373636;
    width: 22%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 15px;
    text-align: center;
    align-items: center;
    border: 1px solid rgb(254, 220, 121, 0.4);

    &:hover {
      background-color: #2c2b2b;
      transform: scale(1.05);
      transition-delay: 0ms !important;
      transition: all 0.2s !important;
    }

    &:hover .service-icon-div {
      background-color: var(--color-primary);
      color: #2c2b2b;
      transition: 0.3s;
      transition-delay: 0.1s;
      font-size: 2.5rem;
    }

    &:hover .service-icon-div:after {
      width: 130%;
      height: 130%;
      opacity: 1;
    }

    &:hover p {
      color: rgb(254, 220, 121, 0.4);
      transition: 0.3s;
      font-weight: 500;
    }

    @media ${device.laptop} {
      margin: 10px;
    }

    @media ${device.mobileL} {
      width: 300px;
      padding: 15px;
      margin: 15px 5px;
    }
    h4 {
      font-size: 1.6rem;
      letter-spacing: 0.7px;
      font-weight: 500;

      @media ${device.mobileL} {
        font-size: 2rem;
      }
    }
  }

  .service-icon-div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #5b5a5a;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-primary);
    font-size: 2rem;
    transition: 0.3s;
    margin-bottom: 10px;
    position: relative;
    z-index: 10;

    &:after {
      content: "";
      position: absolute;
      /*  */
      /* left: 0; */
      width: 50%;
      height: 50%;
      opacity: 0;
      background-color: transparent;
      border: 2px dotted var(--color-primary);
      border-radius: 50%;
      z-index: -1;
      transition: all 0.4s;
      animation: rotating 10s linear infinite;
    }

    @media ${device.tablet} {
      font-size: 3rem;
    }

    @media ${device.mobileL} {
      font-size: 2.5rem;
    }
  }
`;
