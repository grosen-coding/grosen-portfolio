import React from "react";
import styled from "styled-components";
import { device } from "../components/device";

function Portfolio() {
  return (
    <Container id="portfolio">
      <Wrap>
        <h2>
          <span>Portfolio</span>
          <div></div>
        </h2>
        <Projects>
          {/* Project 1 */}
          <Project
            id="project-1"
            className="project-card"
            data-aos="flip-left"
            data-aos-delay="100"
            data-aos-duration="700"
            data-aos-easing="ease"
            data-aos-offset="200px"
          >
            <ProjectTitle className="project-card-title">
              <h3>K9 Paws</h3>

              <h5>full stack website</h5>
              <a
                href="https://k9paws-website.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <ProjectLinkBtn className="project-btn">
                  Check it out!
                </ProjectLinkBtn>
              </a>
            </ProjectTitle>
            <ProjectImg
              className="project-card-img"
              src="../img/k9paws-bg.jpeg"
              alt=""
            />
          </Project>

          {/* Project 2 */}
          <Project
            id="project-2"
            className="project-card"
            data-aos="flip-left"
            data-aos-delay="250"
            data-aos-duration="700"
            data-aos-easing="ease"
            data-aos-offset="200px"
          >
            <ProjectTitle className="project-card-title">
              <h3>Retro Daily Planner</h3>

              <h5>full stack website</h5>
              <a
                href="https://retro-daily-planner-app.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <ProjectLinkBtn className="project-btn">
                  Check it out!
                </ProjectLinkBtn>
              </a>
            </ProjectTitle>
            <ProjectImg
              className="project-card-img"
              src="../img/daily-planner-bg.jpeg"
              alt=""
            />
          </Project>

          {/* Project 3 */}
          <Project
            id="project-3"
            className="project-card"
            data-aos="flip-left"
            data-aos-delay="400"
            data-aos-duration="700"
            data-aos-easing="ease"
            data-aos-offset="200px"
          >
            <ProjectTitle className="project-card-title">
              <h3>PawTours</h3>

              <h5>front end website</h5>
              <a
                href="https://modest-brahmagupta-c4ca2d.netlify.app/index.html"
                target="_blank"
                rel="noreferrer"
              >
                <ProjectLinkBtn className="project-btn">
                  Check it out!
                </ProjectLinkBtn>
              </a>
            </ProjectTitle>
            <ProjectImg
              className="project-card-img"
              src="../img/pawtours-bg.jpeg"
              alt=""
            />
          </Project>

          {/* Project 4 */}
          <Project
            id="project-4"
            className="project-card"
            data-aos="flip-left"
            data-aos-delay="650"
            data-aos-duration="700"
            data-aos-easing="ease"
            data-aos-offset="50px"
          >
            <ProjectTitle className="project-card-title">
              <h3>Quick Pick Flicker</h3>

              <h5>react website</h5>
              <a
                href="https://flickpicker.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <ProjectLinkBtn className="project-btn">
                  Check it out!
                </ProjectLinkBtn>
              </a>
            </ProjectTitle>
            <ProjectImg
              className="project-card-img"
              src="../img/quick-pick-bg-2.jpeg"
              alt=""
            />
          </Project>

          {/* Project 5 */}
          <Project
            id="project-5"
            className="project-card"
            data-aos="flip-left"
            data-aos-delay="800"
            data-aos-duration="700"
            data-aos-easing="ease"
            data-aos-offset="50px"
          >
            <ProjectTitle className="project-card-title">
              <h3>The Dog Blog</h3>

              <h5>react website</h5>
              <a
                href="https://eloquent-wescoff-2d2bcd.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <ProjectLinkBtn className="project-btn">
                  Check it out!
                </ProjectLinkBtn>
              </a>
            </ProjectTitle>
            <ProjectImg
              className="project-card-img"
              src="../img/4.jpg"
              alt=""
            />
          </Project>

          {/* Project 6 */}
          <Project
            id="project-6"
            className="project-card"
            data-aos="flip-left"
            data-aos-delay="950"
            data-aos-duration="700"
            data-aos-easing="ease"
            data-aos-offset="50px"
          >
            <ProjectTitle className="project-card-title">
              <h3>Project Title 6</h3>

              <h5>project type</h5>
              <a
                href="https://k9paws-website.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <ProjectLinkBtn className="project-btn">
                  Check it out!
                </ProjectLinkBtn>
              </a>
            </ProjectTitle>
            <ProjectImg
              className="project-card-img"
              src="../img/k9paws-bg-2.jpeg"
              alt=""
            />
          </Project>
        </Projects>
      </Wrap>
    </Container>
  );
}

export default Portfolio;

const Container = styled.section`
  height: 100%;
  width: 100%;
  /* background-image: linear-gradient(rgba(23, 26, 29, 1), rgba(45, 48, 52, 0.9)); */
  background-position: center;
  background-color: #000;

  background-repeat: no-repeat;
  font-family: var(--font-title);
  padding-bottom: 60px;
  position: relative;
  overflow: hidden;
  border-bottom: 2px solid var(--color-primary);
  border-top: 2px solid var(--color-primary);

  @media ${device.mobileL} {
    padding: 0 0 30px;
  }

  &:after {
    content: "";
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(to bottom, #000, #0003 100%, #0000);
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
  position: relative;
  z-index: 6;
  color: #e2e2e2;

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

const Projects = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 200px);
  gap: 20px;
  padding: 40px 0;

  @media ${device.tablet} {
    padding: 0 5px;
    width: 100%;
    gap: 12px;
  }

  @media ${device.mobileL} {
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const Project = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 30px;
  z-index: 7;

  /* &:hover {
    border: 1px solid rgb(254, 220, 121);
  } */

  @media ${device.mobileL} {
    height: 250px;
  }

  &:hover .project-card-title {
    opacity: 1;
    transition: all 0.3s;
  }

  &:hover .project-card-title h5 {
    transform: translateY(0);
    opacity: 1;
    transition: all 0.3s;
  }

  &:hover .project-card-img {
    opacity: 0.4;
    transform: scale(1);
  }

  &:nth-of-type(1) {
    grid-row: 1 / 3;
  }
  &:nth-of-type(2) {
    grid-row: 1 / 2;
  }
  &:nth-of-type(3) {
    grid-row: 1 / 3;
  }

  &:nth-of-type(4) {
    grid-row: 3 / 4;
  }

  &:nth-of-type(5) {
    grid-row: 2 / 4;
  }
  &:nth-of-type(6) {
    grid-row: 3 / 4;
  }

  &:hover .project-btn {
    transform: scale(1);
    opacity: 1;
    transition: all 0.5s;
  }
`;

const ProjectTitle = styled.div`
  position: absolute;
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  text-align: center;
  z-index: 7;
  opacity: 0;
  transition: 0.3s;

  h3 {
    font-size: 2.2rem;
    letter-spacing: 0.8px;
    transition: 0.3s;

    @media ${device.mobileL} {
      font-size: 2.8rem;
    }
  }

  h5 {
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: 1px;
    transition: 0.3s;
    color: var(--color-yellow);
    transform: translateY(-300%);
    opacity: 0;
    transition: all 0.3s;

    @media ${device.mobileL} {
      font-size: 1.6rem;
    }
  }
`;

const ProjectLinkBtn = styled.div`
  width: 200px;
  height: auto;
  background-color: var(--color-primary);
  border-radius: 10px;
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  font-weight: 500;
  font-size: 1.2rem;
  font-family: var(--font-title);
  letter-spacing: 0.8px;
  opacity: 0;
  transform: scale(0);
  transition: 0.3s;
  color: rgba(0, 0, 0, 0.5);

  @media ${device.mobileL} {
    width: 150px;
    padding: 5px 10px;
  }

  &:hover {
    background-color: #e2e2e2;
    color: var(--color-primary);
    transition: 0.3s;
  }
`;

const ProjectImg = styled.img`
  width: 100%;
  border-radius: 30px;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  transition: all 0.3s;
  transform: scale(1.2);
`;
