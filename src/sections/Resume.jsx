import React from "react";
import styled from "styled-components";
import { device } from "../components/device";

function Resume() {
  return (
    <Container id="resume">
      <Wrap>
        <h2>
          <span>Resume</span>
          <div
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          ></div>
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
                  I first built my company's website in 2014, using a template.
                  It didn't take long before I realized the template's
                  limitations, and began learning how to code front-end
                  websites. As I learned more, I have been re-designing &
                  running the website ever since, and have recently updated it
                  to a full-stack website for my dog clients to be able to
                  submit on-going training reports.
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
                  Responsible for overseeing and completing $2.5M in large-scale
                  residential construction projects yearly. Coached and mentored
                  a team of 13 employees, while working hands-on in the field.
                  Reduced costs and waste by 10-20% by implementing efficient
                  strategies and alternative procedures. Assisted in design,
                  planning, documentation, and implementation of all
                  construction projects.
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
                  Solely responsible for designing, building and running a
                  3500sq.ft canine rehabilitation sanctuary, meant for training
                  and re-homing last-chance dogs. Responsible for the safety,
                  security and training of all dogs, as well as 12-15 internal
                  staff, and countless volunteers. Personally developed and
                  implemented a unique, extremely effective, training &
                  rehabilitation system taught to thousands of clients, either
                  one-on-one, or in groups of 10-50. Specialized in
                  pack-oriented hierarchy training and canine psychology
                  education.
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
                  First completed Juno's Web Development program, and began
                  building HTML/CSS single-page websites. Then completed their
                  Vanilla JS and JQuery fundamentals course. Finally,
                  successfully completed and graduated from their 9-week, full
                  Front-End Web Development boot camp. Learned all fundamentals
                  for understanding, and effectively developing front-end
                  websites, with heavy experience using React, Firebase, NPM,
                  Git, and peer-programming.
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
                  Originally attended Mohawk's Architecture Technology program
                  to help further my already-growing skills in the field of
                  residential construction. Successfully completed their 3-year
                  program, and went on to successfully start my first company,
                  selling, designing & building residential landscapes.
                  Maintained a minimum 85% grade average.
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
                  Began studying Political Science, moving to Behaviour
                  Psychology in my 2nd year. Successfully completed McMaster's
                  4-year B.A. Psychology program, graduating with a specialty in
                  Animal Behaviour, while maintaining a grade point average of
                  3.5. Participated in several off-campus programs such as
                  McMaster Music Club and Spiritual Club. Volunteered and
                  participated in several LIVELab research projects.
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
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(50, 54, 59, 0.1)); */
  background-color: rgba(50, 54, 59, 0.9);

  font-family: var(--font-title);
  padding-bottom: 60px;
  position: relative;
  overflow: hidden;

  &:after {
    content: "";
    width: 100%;
    bottom: 0;
    left: 0;
    height: 100%;
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
  z-index: 6;

  @media ${device.mobileL} {
    padding: 0 10px;
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
      padding: 0 25px;
      margin-top: 0;
      font-size: 2.3rem;
    }

    @media ${device.mobileL} {
      margin-top: 20px;
      font-size: 2.6rem;
    }

    > div {
      height: 1px;
      width: 40%;
      background-color: grey;
      margin: 40px auto 45px;
      position: relative;
      overflow: hidden;

      @media ${device.tablet} {
        margin: 20px auto;
      }

      @media ${device.mobileL} {
        margin: 20px auto 0;
      }
      &:before {
        content: "";
        position: absolute;
        height: 50px;
        top: 50%;
        width: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 10px solid rgba(50, 54, 59, 0.9);
        z-index: 6;
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

  @media ${device.laptop} {
    width: 90%;
  }

  @media ${device.mobileL} {
    flex-direction: column;
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
    height: 400px;
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
        rgba(255, 255, 255, 0.341) 0%,
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
        color: #333333;
        font-weight: 600;
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
        color: var(--color-yellow);
        font-size: 1.2rem;
      }
    }

    p {
      line-height: 1.5;

      @media ${device.tablet} {
        font-size: 1.3rem;
      }

      @media ${device.mobileL} {
        font-size: 1.6rem;
        text-align: justify;
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
