import React from "react";
import styled from "styled-components";
import { FaReact } from "react-icons/fa";
import { SlDiamond } from "react-icons/sl";
import { AiOutlineRocket } from "react-icons/ai";
import { device } from "../components/device";

function About() {
  return (
    <Container id="about">
      <AboutWrap>
        <h2>
          <span>Welcome to My World!</span>
          <div
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          ></div>
        </h2>
        <p>
          I'm an accomplished and results-driven professional, a tech
          enthusiast, and entrepreneur who loves to take risks. Growing up in a
          tech-loving family in northern Toronto, Ont, means computers have been
          in my blood since birth. My coding journey began 25 years ago, writing
          basic HTML websites and designing graphics in Adobe Photoshop - long
          before CSS first made life much easier - but it wasn't until I became
          a business owner that I truly fell in love with web development.
        </p>
        <p>
          Front-End Development is currently my specialty, with a proficiency in
          advanced HTML, CSS and JavaScript code, but, without a doubt, what I
          enjoy most, is using <strong>React</strong>. React allows me to bring
          an obsessive level of creativity and attention-to-detail into my
          projects. I take great pride in developing websites & writing code
          with a fresh, up-to-date and modern approach. Having an extensive
          background as a long-time entrepreneur, and in both project and
          employee management has given me a sharp eye for problem solving and
          positive leadership, and has made me an asset to anyone expecting the
          best. When I'm not coding, you can find me rehabilitating last-chance
          dogs, teaching canine psychology, designing & building award-winning
          landscapes, hiking & exploring nature, building sustainable food
          gardens, or playing the drums and a variety of sports.
        </p>

        <AboutContent>
          <ContentCard
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <div className="card-icon">
              <FaReact />
            </div>
            <h3>Creativity</h3>
            <p>
              Without a doubt, the best part of modern web development has to be
              the endless possibilities to express my creativity. From writing
              cleaner, more efficient code, to obsessing over the placement of
              design components, the skies, and imagination, are truly the limit
              all the way from design right through implementation.
            </p>
          </ContentCard>
          <ContentCard
            data-aos="zoom-in"
            data-aos-delay="250"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <div className="card-icon">
              <SlDiamond />
            </div>
            <h3>Dedication</h3>
            <p>
              When I start something, I finish it. I love to be challenged, and
              I love to solve problems even more knowing there are always
              multiple solutions. Whether I'm debugging a problem with code, or
              working with a client, my level of commitment to my work is
              unmatched, and I will always see every project through to
              completion.
            </p>
          </ContentCard>
          <ContentCard
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <div className="card-icon">
              <AiOutlineRocket />
            </div>
            <h3>Constant Learning</h3>
            <p>
              Web development changes faster than most technology these days.
              The excitement of watching emerging languages and methods develop
              literally every day allows me to feel I am able to continuously
              learn something new or different. Constant learning also means
              stronger project efficiency.
            </p>
          </ContentCard>
        </AboutContent>
      </AboutWrap>
    </Container>
  );
}

export default About;

const Container = styled.section`
  height: 100%;
  width: 100%;
  /* background-image: linear-gradient(rgba(23, 26, 29, 0.9), rgba(23, 26, 29, 1)); */
  background-color: #000;

  font-family: var(--font-title);
  padding: 40px 0;
  position: relative;
  overflow: hidden;

  @media ${device.mobileL} {
    padding: 35px 0;
  }

  &:after {
    content: "";
    width: 100%;
    top: 0;
    left: 0;
    height: 150%;
    background: linear-gradient(to bottom, #000, #0003 70%, #0000);
    position: absolute;
    z-index: 5;
  }
`;

const AboutWrap = styled.div`
  max-width: 100%;
  width: var(--section-wrap-width);
  margin: 0 auto;
  height: 100%;
  color: #e2e2e2;
  position: relative;
  z-index: 7;

  @media ${device.laptopL} {
    padding: 0 25px;
  }

  @media ${device.mobileL} {
    padding: 0 10px;
  }

  > p {
    text-align: center;
    font-size: 1.4rem;
    padding: 10px 0;
    margin-bottom: 40px;

    @media ${device.laptopL} {
      text-align: justify;
    }

    @media ${device.tablet} {
      margin-bottom: 20px;
    }

    @media ${device.mobileL} {
      font-size: 1.6rem;
      padding: 10px;
    }
  }

  h2 {
    margin-top: 20px;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 3.5rem;
    letter-spacing: 0.8px;
    text-align: center;
    color: var(--color-yellow);

    @media ${device.tablet} {
      font-size: 3rem;
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

const AboutContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;

  @media ${device.mobileL} {
    flex-direction: column;
  }
`;
const ContentCard = styled.div`
  height: auto;
  padding: 30px;
  width: 30%;
  border-left: 1px solid rgb(254, 220, 121, 0.4);

  @media ${device.tablet} {
    width: 33%;
    padding: 10px 20px;
  }

  @media ${device.mobileL} {
    width: 100%;
    padding: 20px;
    margin: 10px 0;
  }

  .card-icon {
    color: var(--color-primary);
    font-size: 3rem;
  }

  h3 {
    font-size: 2rem;
    font-weight: 600;
    padding-bottom: 20px;

    @media ${device.mobileL} {
      font-size: 2.6rem;
    }
  }

  p {
    @media ${device.mobileL} {
      font-size: 1.6rem;
    }
  }
`;
