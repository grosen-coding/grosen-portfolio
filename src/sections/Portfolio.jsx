import React from "react";
import styled from "styled-components";

function Portfolio() {
  return (
    <Container id="portfolio">
      <Wrap>
        <h1>
          <span>Portfolio</span>
          <div></div>
        </h1>
        <Projects>
          <Project id="project-1" className="project-card">
            <ProjectTitle className="project-card-title">
              <h3>K9 Paws</h3>
              <h5>full stack website</h5>
            </ProjectTitle>
            <ProjectImg
              className="project-card-img"
              src="../img/1.jpg"
              alt=""
            />
          </Project>
          <Project id="project-2" className="project-card">
            <ProjectTitle className="project-card-title">
              <h3>Retro Daily Planner</h3>
              <h5>full stack website</h5>
            </ProjectTitle>
            <ProjectImg
              className="project-card-img"
              src="../img/4.jpg"
              alt=""
            />
          </Project>
          <Project id="project-3" className="project-card">
            <ProjectTitle className="project-card-title">
              <h3>PawTours</h3>
              <h5>front end website</h5>
            </ProjectTitle>
            <ProjectImg
              className="project-card-img"
              src="../img/6.jpg"
              alt=""
            />
          </Project>
          <Project id="project-4" className="project-card">
            <ProjectTitle className="project-card-title">
              <h3>Quick Pick Flicker</h3>
              <h5>react website</h5>
            </ProjectTitle>
            <ProjectImg
              className="project-card-img"
              src="../img/3.jpg"
              alt=""
            />
          </Project>
          <Project id="project-5" className="project-card">
            <ProjectTitle className="project-card-title">
              <h3>The Dog Blog</h3>
              <h5>react website</h5>
            </ProjectTitle>
            <ProjectImg
              className="project-card-img"
              src="../img/2.jpg"
              alt=""
            />
          </Project>
          <Project id="project-6" className="project-card">
            <ProjectTitle className="project-card-title">
              <h3>Project Title 6</h3>
              <h5>project type</h5>
            </ProjectTitle>
            <ProjectImg
              className="project-card-img"
              src="../img/2.jpg"
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
  background-image: linear-gradient(rgba(23, 26, 29, 1), rgba(23, 26, 29, 0.9));
  background-position: center;
  background-position: cover;
  background-repeat: no-repeat;
  font-family: var(--font-title);
  padding-bottom: 60px;
  position: relative;

  &:after {
    content: "";
    width: 100%;
    bottom: 0;
    height: 100%;
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
  position: relative;
  z-index: 6;
  color: #e2e2e2;
  /* height: auto; */

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
`;

const Projects = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 200px);
  gap: 20px;
  padding: 40px 0;

  /* border: 1px solid green; */
`;

const Project = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 30px;
  z-index: 7;

  &:hover .project-card-title {
    opacity: 1;
  }

  &:hover .project-card-img {
    opacity: 0.4;
    transform: scale(1);
    border: 1px solid;
  }
  /* height: auto; */
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
`;

const ProjectTitle = styled.div`
  position: absolute;
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  z-index: 7;
  opacity: 0;
  transition: 0.3s;

  h3 {
    font-size: 2rem;
    letter-spacing: 0.8px;
    transition: 0.3s;
    padding: 20px 0 80px;
  }

  h5 {
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: 1px;
    transition: 0.3s;
  }
`;

// const ImgWrap = styled.div`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   /* z-index: -1; */
// `;

const ProjectImg = styled.img`
  width: 100%;
  border-radius: 30px;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  transition: all 0.3s;
  transform: scale(1.05);
`;
