import React from "react";
import styled from "styled-components";
import { device } from "../components/device";

function WhatIDo() {
  return (
    // <div class="item" data-aos="example-anim1">7</div>

    // [data-aos="example-anim1"] {
    //   transform: skewX(45deg);
    //   opacity: 0;
    //   transition-property: transform, opacity;
    //   &.aos-animate {
    //     transform: skewX(0);
    //     opacity: 1;
    //   }
    // }

    <Container id="what-i-do">
      <Wrap>
        <div>
          <Left>
            <ImgWrap>
              <img src="./img/what-i-do.png" alt="" />
            </ImgWrap>
          </Left>

          <Right>
            <h2
              data-aos="flip-down"
              data-aos-delay="0"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
              data-aos-offset="100px"
            >
              What I Do
            </h2>
            <h3
              data-aos="fade-left"
              data-aos-delay="450"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-offset="100px"
            >
              I Develop Websites & Debug Code
            </h3>
            <p
              className="p-text"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-offset="100px"
            >
              My strongest areas of web development are easily designing &
              creating stunning websites, and debugging code. Writing a website
              from scratch, or tracking down & solving a problem bug, deliver
              overwhelming feelings of excitement, satisfaction and pride that
              make me only want to learn more. I can provide custom designs,
              help you create your own vision for your personal or business
              website, or even help you find problems and bugs in your code.
            </p>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            ></div>
            <h2
              data-aos="flip-down"
              data-aos-delay="0"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
              data-aos-offset="100px"
            >
              Why Work With Me
            </h2>
            <h3
              data-aos="fade-left"
              data-aos-delay="450"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-offset="100px"
            >
              Superior Results with Top User Experience
            </h3>
            <p
              className="p-text"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-offset="100px"
            >
              Over two decades of working with clients and large companies has
              also given me the patience, knowledge and ability to work
              extremely effectively in all environments, whether one-on-one,
              leading a small group, or being an essential part of a large
              company. I bring the same level of passion, creativity and
              dedication to every aspect of my life, and take great pride in
              providing results that always exceed expectations. You will never
              be disappointed!
            </p>
          </Right>
        </div>
      </Wrap>
    </Container>
  );
}

export default WhatIDo;

const Container = styled.section`
  height: 100%;
  width: 100%;
  background-image: linear-gradient(rgba(23, 26, 29, 1), rgba(46, 49, 53, 0.9));
  background-repeat: no-repeat;
  font-family: var(--font-title);
  padding: 40px 0;
  position: relative;
  overflow: hidden;

  @media ${device.laptop} {
    padding: 20px 0;
  }

  &:after {
    content: "";
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(to bottom, #000, #0003 80%, #0000);
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
  z-index: 6;

  @media ${device.laptop} {
    padding-top: 0;
  }

  & > div {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;

    @media ${device.laptopL} {
      padding: 0 25px;
    }

    @media ${device.tablet} {
      padding: 0 25px;
      flex-direction: column;
    }

    @media ${device.mobileL} {
      padding: 0 10px;
      flex-direction: column;
      width: 90%;
      margin: 0 auto;
    }
  }
`;

const Left = styled.div`
  width: 47%;
  height: 100%;

  @media ${device.tablet} {
    width: 100%;
  }

  @media ${device.mobileL} {
    width: 100%;
  }
`;

const ImgWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  padding-bottom: 120px;

  @media ${device.tablet} {
    padding-bottom: 0;
  }

  @media ${device.mobileL} {
    padding-bottom: 30px;
  }

  img {
    width: 90%;
    border-radius: 50px;

    @media ${device.laptop} {
      width: 100%;
    }

    @media ${device.tablet} {
      width: 50%;
    }

    @media ${device.mobileL} {
      width: 100%;
    }
  }
`;

const Right = styled.div`
  width: 47%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  p {
    padding: 10px 0;
    opacity: 0.6;
    color: rgb(169, 166, 166);

    @media ${device.tablet} {
      text-align: justify;
    }

    @media ${device.mobileL} {
      font-size: 1.6rem;
    }
  }

  @media ${device.tablet} {
    width: 100%;
  }

  @media ${device.mobileL} {
    width: 100%;
  }

  div {
    height: 1px;
    width: 70%;
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
      border: 10px solid rgba(50, 54, 59, 0.9);
      z-index: 2;
      background-color: var(--color-primary);
    }
  }

  h2 {
    font-size: 2rem;
    color: var(--color-primary);
    text-transform: uppercase;
  }

  h3 {
    font-size: 4rem;
    line-height: 1.1;
    padding: 20px 0;
    color: var(--color-yellow);
  }
`;
