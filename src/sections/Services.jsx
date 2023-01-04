import React from "react";
import styled from "styled-components";
import { FaDesktop } from "react-icons/fa";
import { ImMobile } from "react-icons/im";
import { MdDeveloperBoard } from "react-icons/md";
import { AiOutlineLock } from "react-icons/ai";
import { AiOutlineCoffee } from "react-icons/ai";
import { GiPencilBrush } from "react-icons/gi";
import { device } from "../components/device";

function Services() {
  return (
    <Container id="services">
      <Wrap>
        <h2>
          <span>Services I Offer</span>
          <div></div>
        </h2>
        <ServicesWrap>
          <div
            className="service-card"
            data-aos="flip-down"
            data-aos-delay="200"
            data-aos-duration="700"
            data-aos-easing="ease"
            data-aos-offset="200px"
          >
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
          <div
            className="service-card"
            data-aos="flip-down"
            data-aos-delay="300"
            data-aos-duration="700"
            data-aos-easing="ease"
            data-aos-offset="200px"
          >
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
          <div
            className="service-card"
            data-aos="flip-down"
            data-aos-delay="400"
            data-aos-duration="700"
            data-aos-easing="ease"
            data-aos-offset="200px"
          >
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
          <div
            className="service-card"
            data-aos="flip-down"
            data-aos-delay="500"
            data-aos-duration="700"
            data-aos-easing="ease"
            data-aos-offset="200px"
          >
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
          <div
            className="service-card"
            data-aos="flip-down"
            data-aos-delay="600"
            data-aos-duration="700"
            data-aos-easing="ease"
            data-aos-offset="200px"
          >
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
          <div
            className="service-card"
            data-aos="flip-down"
            data-aos-delay="700"
            data-aos-duration="700"
            data-aos-easing="ease"
            data-aos-offset="200px"
          >
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
    background: linear-gradient(to top, #000, #0003 70%, #0000);
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
    font-size: 2rem;
    letter-spacing: 0.8px;
    text-align: center;

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
    border: 1px solid #343333;
    margin: 20px;
    border-radius: 10px;
    background-color: #373636;
    width: 30%;
    height: 320px;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 30px;
    text-align: center;
    align-items: center;

    @media ${device.tablet} {
      margin: 10px;
    }

    @media ${device.mobileL} {
      width: 300px;
      padding: 15px;
      margin: 15px 5px;
    }
    h4 {
      font-size: 1.8rem;
      letter-spacing: 0.7px;

      @media ${device.mobileL} {
        font-size: 2.2rem;
      }
    }

    p {
      color: rgb(169, 166, 166);

      @media ${device.mobileL} {
        font-size: 1.6rem;
      }
    }
  }

  .service-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #5b5a5a;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-primary);
    font-size: 2rem;

    @media ${device.mobileL} {
      font-size: 2.5rem;
    }
  }
`;
