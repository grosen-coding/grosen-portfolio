import React from "react";
import styled from "styled-components";
import { device } from "../components/device";

function Resume() {
  return (
    <Container id="resume">
      <Wrap>
        <h2>
          <span>Resume</span>
          <div></div>
        </h2>
        <ResumeWrap>
          <Left>
            <h3>Experience</h3>
            <Experience>
              <Job className="resume-card">
                <div
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1200"
                  data-aos-easing="ease"
                  data-aos-offset="200px"
                ></div>
                <h5>
                  <span>1</span>2016 - present
                </h5>
                <h3>Full-Stack Designer & Developer</h3>
                <h4>
                  K9 Design -- <span>Toronto, ONT</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  dolorum maiores tempora molestiae iure possimus architecto,
                  cupiditate atque laboriosam in modi, quam excepturi soluta
                  sequi? Veniam rerum dolore ratione maxime optio. Eum dicta
                  ipsam illum esse id quaerat cum recusandae!
                </p>
              </Job>
              <Job className="resume-card">
                <div
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1200"
                  data-aos-easing="ease"
                  data-aos-offset="200px"
                ></div>
                <h5>
                  <span>2</span>2019 - 2022
                </h5>
                <h3>Senior Project Manager</h3>
                <h4>
                  RMF Construction -- <span>Holland Landing, ONT</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur, dolorum pariatur? Delectus aliquid eius vero
                  possimus inventore totam quibusdam recusandae. Voluptatibus
                  enim dolores culpa deserunt aliquam molestias incidunt nisi?
                  Perspiciatis aliquam culpa doloribus similique voluptate sit,
                  beatae omnis laboriosam vel!
                </p>
              </Job>
              <Job className="resume-card">
                <div
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1200"
                  data-aos-easing="ease"
                  data-aos-offset="200px"
                ></div>
                <h5>
                  <span>3</span>2010 - present
                </h5>
                <h3>Owner & Operator</h3>
                <h4>
                  K9PAWS -- <span>Greater Toronto Area, ONT</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda facilis ab in reiciendis mollitia enim quo,
                  excepturi quas perspiciatis placeat animi architecto. Dolore,
                  explicabo repellendus voluptates dignissimos minus molestias,
                  officia atque quis magnam dolorem et esse expedita eius dolor,
                  labore sit ea reprehenderit sequi quae deserunt quo repellat.
                  Commodi id facilis eos fuga, eius autem?
                </p>
              </Job>
            </Experience>
          </Left>

          <Right>
            <h3>Education</h3>
            <Education>
              <School className="resume-card">
                <div
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-duration="1200"
                  data-aos-easing="ease"
                  data-aos-offset="200px"
                ></div>
                <h5>
                  <span>1</span>2021-2022
                </h5>
                <h3>Front-End Development</h3>
                <h4>
                  Juno College of Technology -- <span>Toronto, ONT</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium nulla minus totam officiis neque omnis architecto
                  molestias quam magni impedit sunt aliquam ratione velit
                  perspiciatis, dolorem, a tempora dolorum alias error
                  reprehenderit iure dolor? Mollitia incidunt velit veritatis
                  eveniet eum ea dolores omnis obcaecati sit?
                </p>
              </School>
              <School className="resume-card">
                <div
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-duration="1200"
                  data-aos-easing="ease"
                  data-aos-offset="200px"
                ></div>
                <h5>
                  <span>2</span>2006 - 2008
                </h5>
                <h3>Architectural Technology</h3>
                <h4>
                  Mohawk College -- <span>Hamilton, ONT</span>
                </h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Temporibus odit quas ut sunt nostrum corporis beatae neque
                  ullam, eum sit est nulla, suscipit blanditiis nesciunt dolor
                  rem tempora labore eius sint expedita, dicta aut at?
                </p>
              </School>
              <School className="resume-card">
                <div
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-duration="1200"
                  data-aos-easing="ease"
                  data-aos-offset="200px"
                ></div>
                <h5>
                  <span>3</span>2002 - 2006
                </h5>
                <h3>Bachelor of Arts Psychology</h3>
                <h4>
                  McMaster University -- <span>Toronto, ONT</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempora ex a dignissimos, deserunt vero error nam libero?
                  Blanditiis soluta accusantium fugiat sunt adipisci
                  voluptatibus maxime laboriosam dolores autem minus fuga sint,
                  accusamus voluptates hic magni nostrum velit vel eum officia!
                </p>
              </School>
            </Education>
          </Right>
        </ResumeWrap>
      </Wrap>
    </Container>
  );
}

export default Resume;

const Container = styled.section`
  height: 100%;
  width: 100%;
  background-image: linear-gradient(rgba(23, 26, 29, 0.9), rgba(23, 26, 29, 1));

  font-family: var(--font-title);
  padding-bottom: 60px;
  position: relative;
  overflow: hidden;

  &:after {
    content: "";
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(to bottom, #000, #0003 50%, #0000);
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

  @media ${device.mobileL} {
    padding: 0 10px;
  }

  h2 {
    margin-top: 20px;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 2rem;
    letter-spacing: 0.8px;
    text-align: center;

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

const ResumeWrap = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;

  @media ${device.mobileL} {
    flex-direction: column;
    width: 100%;
  }

  @media ${device.mobileL} {
    width: 90%;
    padding: 0;
  }

  h3 {
    font-size: 2.2rem;
    font-weight: 500;
    padding: 40px 0 30px;

    @media ${device.mobileL} {
      font-size: 3rem;
    }
  }

  .resume-card {
    height: 350px;
    position: relative;
    width: 100%;
    min-height: 100%;

    @media ${device.mobileL} {
      height: auto;
    }

    > div {
      position: absolute;
      height: 40px;
      width: 100%;
      top: 0;
      left: 0;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.1) 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    h5 {
      font-size: 1.3rem;
      font-weight: 300;
      position: absolute;
      padding: 10px 0;
      top: 0;
      width: 100%;

      @media ${device.mobileL} {
        font-size: 1.6rem;
      }

      span {
        position: absolute;
        top: 0;
        left: 5px;
        display: inline-block;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background-color: var(--color-primary);
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translateX(-55px);
      }
    }

    h3 {
      font-size: 1.8rem;
      padding-bottom: 10px;

      @media ${device.mobileL} {
        font-size: 2rem;
      }
    }

    h4 {
      font-size: 1.6rem;
      font-weight: 600;
      color: var(--color-primary);
      padding-bottom: 30px;
      font-weight: 400;

      @media ${device.mobileL} {
        padding-bottom: 15px;
      }

      span {
        opacity: 0.6;
        color: #e2e2e2;
        font-size: 1.2rem;
      }
    }

    p {
      line-height: 1.5;

      @media ${device.mobileL} {
        font-size: 1.6rem;
      }
    }
  }
`;

const Left = styled.div`
  width: 47%;
  height: 100%;

  @media ${device.mobileL} {
    width: 100%;
  }
`;

const Experience = styled.div`
  display: flex;
  flex-direction: column;
`;

const Job = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  border-left: 1px solid grey;

  @media ${device.mobileL} {
    padding: 20px 0 15px 30px;
  }
`;

const Right = styled.div`
  width: 47%;
  height: 100%;

  @media ${device.mobileL} {
    width: 100%;
  }
`;

const Education = styled.div`
  display: flex;
  flex-direction: column;
`;

const School = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  border-left: 1px solid grey;

  @media ${device.mobileL} {
    padding: 20px 0 15px 30px;
  }
`;
