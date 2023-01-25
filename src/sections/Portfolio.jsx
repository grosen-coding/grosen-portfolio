import React from "react";
import styled from "styled-components";
import { device } from "../components/device";
import { useState } from "react";

function Portfolio() {
  const [projectModal, setProjectModal] = useState(false);
  const handleOpenProject = () => {
    setProjectModal(!projectModal);
    let x = document.getElementsByTagName("BODY")[0];
    x.style.overflow = "hidden";
  };
  const handleCloseProject = () => {
    setProjectModal(!projectModal);
    let x = document.getElementsByTagName("BODY")[0];
    x.style.overflow = "auto";
  };

  const [projectModal2, setProjectModal2] = useState(false);
  const handleOpenProject2 = () => {
    setProjectModal2(!projectModal2);
    let x = document.getElementsByTagName("BODY")[0];
    x.style.overflow = "hidden";
  };
  const handleCloseProject2 = () => {
    setProjectModal2(!projectModal2);
    let x = document.getElementsByTagName("BODY")[0];
    x.style.overflow = "auto";
  };

  const [projectModal3, setProjectModal3] = useState(false);
  const handleOpenProject3 = () => {
    setProjectModal3(!projectModal3);
    let x = document.getElementsByTagName("BODY")[0];
    x.style.overflow = "hidden";
  };
  const handleCloseProject3 = () => {
    setProjectModal3(!projectModal3);
    let x = document.getElementsByTagName("BODY")[0];
    x.style.overflow = "auto";
  };

  const [projectModal4, setProjectModal4] = useState(false);
  const handleOpenProject4 = () => {
    setProjectModal4(!projectModal4);
    let x = document.getElementsByTagName("BODY")[0];
    x.style.overflow = "hidden";
  };
  const handleCloseProject4 = () => {
    setProjectModal4(!projectModal4);
    let x = document.getElementsByTagName("BODY")[0];
    x.style.overflow = "auto";
  };

  return (
    <>
      <Container id="portfolio">
        <Wrap>
          <h2>
            <span>Featured Projects</span>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            ></div>
          </h2>
          <Projects>
            {/* Project 4 */}
            <Project
              id="project-4"
              className="project-card"
              data-aos="flip-left"
              data-aos-delay="200"
              data-aos-duration="700"
              data-aos-easing="ease"
              data-aos-offset="50px"
            >
              <ProjectTitle className="project-card-title">
                <h3>Quick Pick Flicker</h3>

                <h5>full stack website</h5>

                <ProjectLinkBtn
                  onClick={handleOpenProject}
                  className="project-btn"
                >
                  Check it out!
                </ProjectLinkBtn>
              </ProjectTitle>
              <ProjectImg
                className="project-card-img"
                src="../img/quick-pick-bg-2.jpeg"
                alt=""
              />
            </Project>
            {/* Project 1 */}
            <Project
              id="project-1"
              className="project-card"
              data-aos="flip-left"
              data-aos-delay="350"
              data-aos-duration="700"
              data-aos-easing="ease"
              data-aos-offset="200px"
            >
              <ProjectTitle className="project-card-title">
                <h3>K9 Paws</h3>

                <h5>full stack website</h5>
                {/* <a
                href="https://k9paws-website.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              > */}
                <ProjectLinkBtn
                  className="project-btn"
                  onClick={handleOpenProject2}
                >
                  Check it out!
                </ProjectLinkBtn>
                {/* </a> */}
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
              data-aos-delay="500"
              data-aos-duration="700"
              data-aos-easing="ease"
              data-aos-offset="200px"
            >
              <ProjectTitle className="project-card-title">
                <h3>Retro Daily Planner</h3>

                <h5>full stack website</h5>

                <ProjectLinkBtn
                  onClick={handleOpenProject3}
                  className="project-btn"
                >
                  Check it out!
                </ProjectLinkBtn>
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
              data-aos-delay="750"
              data-aos-duration="700"
              data-aos-easing="ease"
              data-aos-offset="200px"
            >
              <ProjectTitle className="project-card-title">
                <h3>PawTours</h3>

                <h5>front end website</h5>

                <ProjectLinkBtn
                  onClick={handleOpenProject4}
                  className="project-btn"
                >
                  Check it out!
                </ProjectLinkBtn>
              </ProjectTitle>
              <ProjectImg
                className="project-card-img"
                src="../img/pawtours-bg.jpeg"
                alt=""
              />
            </Project>
          </Projects>
        </Wrap>
      </Container>

      {projectModal && (
        <div className="project-modal">
          <div className="close-modal">
            <button
              className="button-close"
              onClick={handleCloseProject}
            ></button>
          </div>
          <ModalWrap>
            <ModalContent>
              <ModalLeft>
                <img src="../img/quick-pick-bg-2.jpeg" alt="" />
              </ModalLeft>
              <ModalRight>
                <h2>Quick Flick Picker</h2>
                <p>
                  Can't decide what to watch? Let Quick Picker decide for you.
                  Technically version 2.0, the Quick Flick Picker app is a
                  custom design, first created as a frontend-only project while
                  attending Juno College, intended to help indecisive users
                  select a random movie or tv show to watch from a list of
                  personal favourites. The entire app has since been completely
                  redesigned and rebuilt into a full-stack MERN app allowing for
                  authenticated user accounts and personal reviews of movies or
                  shows. Styling was done using both the Material UI database,
                  styled-components, and some SASS.
                </p>
                <ModalInfo>
                  <div className="project-info">
                    <div>Type:</div>
                    <div>Full Stack Website</div>
                  </div>
                  <div className="project-info">
                    <div>Year:</div>
                    <div>2022</div>
                  </div>
                  <div className="project-info">
                    <div>Github:</div>
                    <div>
                      <a
                        href="https://github.com/grosen-coding/quick-pick-mern"
                        target="_blank"
                        rel="noreferrer"
                      >
                        github.com/grosen-coding/quick-pick-mern
                      </a>
                    </div>
                  </div>
                  <div className="project-info">
                    <div>Preview:</div>
                    <div>
                      <a
                        href="https://quick-pick-flicker.herokuapp.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        quick-pick-flicker.herokuapp.com
                      </a>
                    </div>
                  </div>
                </ModalInfo>
              </ModalRight>
            </ModalContent>
          </ModalWrap>
        </div>
      )}

      {projectModal2 && (
        <div className="project-modal">
          <div className="close-modal">
            <button
              className="button-close"
              onClick={handleCloseProject2}
            ></button>
          </div>
          <ModalWrap>
            <ModalContent>
              <ModalLeft>
                <img src="../img/k9paws-bg.jpeg" alt="" />
              </ModalLeft>
              <ModalRight>
                <h2>K9Paws</h2>
                <p>
                  Currently undergoing a complete re-design and
                  makeover...K9PAWS is a company website and client platform for
                  training dogs and educating owners. The website has been
                  completely re-designed from scratch, and has now also been
                  created using the MERN stack to allow for client
                  authentication and data management. Styled-components, SASS,
                  and some Material UI was used on the front-end for designing
                  and styling the user experience. THe website also uses both
                  Firebase and MongoDB to manage and create Blog posts and
                  handle backend client data, as well as a Breed search API to
                  provide breed-specific information to clients.
                </p>
                <ModalInfo>
                  <div className="project-info">
                    <div>Type:</div>
                    <div>Full Stack Website</div>
                  </div>
                  <div className="project-info">
                    <div>Year:</div>
                    <div>2021</div>
                  </div>
                  <div className="project-info">
                    <div>Github:</div>
                    <div>
                      <a
                        href="https://github.com/grosen-coding/k9paws-website"
                        target="_blank"
                        rel="noreferrer"
                      >
                        github.com/grosen-coding/k9paws-website
                      </a>
                    </div>
                  </div>
                  <div className="project-info">
                    <div>Preview:</div>
                    <div>
                      <a
                        href="https://k9paws-website.herokuapp.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        k9paws-website.herokuapp.com
                      </a>
                    </div>
                  </div>
                </ModalInfo>
              </ModalRight>
            </ModalContent>
          </ModalWrap>
        </div>
      )}

      {projectModal3 && (
        <div className="project-modal">
          <div className="close-modal">
            <button
              className="button-close"
              onClick={handleCloseProject3}
            ></button>
          </div>
          <ModalWrap>
            <ModalContent>
              <ModalLeft>
                <img src="../img/daily-planner-bg.jpeg" alt="" />
              </ModalLeft>
              <ModalRight>
                <h2>Retro Daily Planner</h2>
                <p>
                  The Retro Daily Planner is an app I created to help plan and
                  organize your busy life. It was built using the MERN stack and
                  a REST API for users to first create an authenticated account,
                  and then input and manage different daily or weekly tasks. The
                  design for the user dashboard was provided for me, with the
                  all other components, menus, animations and styling custom
                  designed by myself.
                </p>
                <ModalInfo>
                  <div className="project-info">
                    <div>Type:</div>
                    <div>Full Stack Website</div>
                  </div>
                  <div className="project-info">
                    <div>Year:</div>
                    <div>2022</div>
                  </div>
                  <div className="project-info">
                    <div>Github:</div>
                    <div>
                      <a
                        href="https://github.com/grosen-coding/daily-planner-app"
                        target="_blank"
                        rel="noreferrer"
                      >
                        github.com/grosen-coding/daily-planner-app
                      </a>
                    </div>
                  </div>
                  <div className="project-info">
                    <div>Preview:</div>
                    <div>
                      <a
                        href="https://retro-daily-planner-app.herokuapp.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        retro-daily-planner-app.herokuapp.com
                      </a>
                    </div>
                  </div>
                </ModalInfo>
              </ModalRight>
            </ModalContent>
          </ModalWrap>
        </div>
      )}

      {projectModal4 && (
        <div className="project-modal">
          <div className="close-modal">
            <button
              className="button-close"
              onClick={handleCloseProject4}
            ></button>
          </div>
          <ModalWrap>
            <ModalContent>
              <ModalLeft>
                <img src="../img/pawtours-bg.jpeg" alt="" />
              </ModalLeft>
              <ModalRight>
                <h2>Nature Paw Tours</h2>
                <p>
                  Nature Paw Tours is a Front-End website, originally built as a
                  fun project as a way to learn and play around with CSS, that
                  actually blossomed into an aspiring dog nature tour company.
                  The website was built using hardcoded HTML, CSS, SASS and
                  Vanilla Javascript, no fancy libraries or frameworks. All
                  pages, content and animations are custom designed.
                </p>
                <ModalInfo>
                  <div className="project-info">
                    <div>Type:</div>
                    <div>Front-End Website</div>
                  </div>
                  <div className="project-info">
                    <div>Year:</div>
                    <div>2021</div>
                  </div>
                  <div className="project-info">
                    <div>Github:</div>
                    <div>
                      <a
                        href="https://github.com/k9paws/pawtours"
                        target="_blank"
                        rel="noreferrer"
                      >
                        github.com/k9paws/pawtours
                      </a>
                    </div>
                  </div>
                  <div className="project-info">
                    <div>Preview:</div>
                    <div>
                      <a
                        href="https://modest-brahmagupta-c4ca2d.netlify.app"
                        target="_blank"
                        rel="noreferrer"
                      >
                        modest-brahmagupta-c4ca2d.netlify.app
                      </a>
                    </div>
                  </div>
                </ModalInfo>
              </ModalRight>
            </ModalContent>
          </ModalWrap>
        </div>
      )}
    </>
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
  display: flex;
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
  color: rgba(0, 0, 0, 0.7);

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

const ModalWrap = styled.div`
  width: 100%;
  height: 100%;
  font-family: var(--font-title);
`;

const ModalContent = styled.div`
  display: flex;
  width: 70%;
  height: 100%;
  margin: 0 auto;
  justify-content: space-between;
  padding-top: 50px;

  @media ${device.laptop} {
    width: 90%;
    /* padding: 30px 20px 20px; */
    /* overflow-y: auto; */
  }

  @media ${device.tablet} {
    width: 90%;
    /* padding: 30px 20px 20px; */
    /* overflow-y: auto; */
  }

  @media ${device.mobileL} {
    flex-direction: column;
    width: 100%;
    padding: 30px 20px 20px;
    overflow-y: auto;
  }
`;

const ModalLeft = styled.div`
  height: 100%;
  width: 60%;

  @media ${device.mobileL} {
    width: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
`;

const ModalRight = styled.div`
  width: 35%;
  color: white;
  @media ${device.mobileL} {
    width: 100%;
  }

  h2 {
    padding: 0 0 20px;
    font-size: 2.5rem;
    letter-spacing: 1.5px;
    font-weight: 400;
    color: var(--color-yellow);

    @media ${device.mobileL} {
      text-align: center;
      padding: 20px 0;
    }
  }

  p {
    padding: 20px 0 60px;
    font-size: 1.4rem;

    @media ${device.mobileL} {
      padding: 0 0 20px;
      text-align: justify;
    }
  }
`;

const ModalInfo = styled.div`
  .project-info {
    padding: 15px 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 1.4rem;
    border-bottom: 1px solid rgba(118, 116, 116, 0.5);
    letter-spacing: 1.2px;

    a {
      color: var(--color-primary);
      font-size: 1.1rem;
      letter-spacing: 0.8px;

      @media ${device.mobileL} {
        font-size: 1rem;
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
