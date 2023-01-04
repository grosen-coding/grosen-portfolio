import React from "react";
import styled from "styled-components";

function Skills() {
  return (
    <Container id="skills">
      <Wrap>
        <div>
          <Left>
            <h2
              data-aos="flip-down"
              data-aos-delay="0"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-offset="100px"
            >
              My Skills
            </h2>
            <h3
              data-aos="fade-right"
              data-aos-delay="450"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-offset="150px"
            >
              I love what I do, and am dedicated to it
            </h3>
            <p
              data-aos="fade-right"
              data-aos-delay="450"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-offset="150px"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              distinctio commodi iste illum nostrum quod tempora nisi eos? Sequi
              fugit in est necessitatibus similique dolor pariatur sit nihil
              repellendus iusto, inventore, explicabo eos perspiciatis rem
              maiores? Similique libero neque expedita cumque. Minus sed
              accusantium at facere nemo dolore? Sapiente assumenda asperiores
              quisquam accusamus, tempore odit quam libero, sequi nobis unde,
              qui porro facere minima nostrum necessitatibus aliquam dolorum
              distinctio sed! Iste voluptas distinctio ipsam aliquam.
            </p>
          </Left>

          <Right>
            <MySkills>
              <SkillWrap>
                <Skill>
                  <h3>HTML</h3>
                  <div id="skill-progress">95%</div>
                </Skill>
                <SkillBar
                  progress={95}
                  className="skill-bar"
                  id="skill-bar"
                ></SkillBar>
              </SkillWrap>
              <SkillWrap>
                <Skill>
                  <h3>CSS</h3>
                  <div id="skill-progress">90%</div>
                </Skill>
                <SkillBar
                  progress={90}
                  className="skill-bar"
                  id="skill-bar"
                ></SkillBar>
              </SkillWrap>
              <SkillWrap>
                <Skill>
                  <h3>Javascript</h3>
                  <div id="skill-progress">70%</div>
                </Skill>
                <SkillBar
                  progress={70}
                  className="skill-bar"
                  id="skill-bar"
                ></SkillBar>
              </SkillWrap>
              <SkillWrap>
                <Skill>
                  <h3>React</h3>
                  <div id="skill-progress">75%</div>
                </Skill>
                <SkillBar
                  progress={75}
                  className="skill-bar"
                  id="skill-bar"
                ></SkillBar>
              </SkillWrap>
              <SkillWrap>
                <Skill>
                  <h3>Debugging</h3>
                  <div id="skill-progress">85%</div>
                </Skill>
                <SkillBar
                  progress={85}
                  className="skill-bar"
                  id="skill-bar"
                ></SkillBar>
              </SkillWrap>
              <SkillWrap>
                <Skill>
                  <h3>Responsive Design</h3>
                  <div id="skill-progress">90%</div>
                </Skill>
                <SkillBar
                  progress={90}
                  className="skill-bar"
                  id="skill-bar"
                ></SkillBar>
              </SkillWrap>
              <SkillWrap>
                <Skill>
                  <h3>Accessibility</h3>
                  <div id="skill-progress">80%</div>
                </Skill>
                <SkillBar
                  progress={80}
                  className="skill-bar"
                  id="skill-bar"
                ></SkillBar>
              </SkillWrap>
            </MySkills>
          </Right>
        </div>
      </Wrap>
    </Container>
  );
}

export default Skills;

const Container = styled.section`
  height: 100%;
  width: 100%;
  background-image: linear-gradient(rgba(23, 26, 29, 0.9), rgba(23, 26, 29, 1));
  background-position: center;
  background-position: cover;
  background-repeat: no-repeat;
  font-family: var(--font-title);
  padding: 40px 0;
  position: relative;

  &:after {
    content: "";
    width: 100%;
    top: 0;
    height: 150%;
    background: linear-gradient(to bottom, #000, #0003 50%, #0000);
    position: absolute;
    z-index: 5;
  }

  /* border: 1px solid red; */
`;

const Wrap = styled.div`
  max-width: 100%;
  width: var(--section-wrap-width);
  margin: 0 auto;
  height: 500px;
  color: #e2e2e2;
  position: relative;
  z-index: 6;
  /* height: auto; */
  padding: 40px 0;
  /* border: 1px solid blue; */

  & > div {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
  }
`;

const Left = styled.div`
  width: 47%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* border: 1px solid yellow; */

  h2 {
    font-size: 2rem;
    color: var(--color-primary);
    text-transform: uppercase;
  }

  h3 {
    font-size: 4rem;
    line-height: 1.1;
  }

  p {
    padding: 10px 0;
  }
`;

const Right = styled.div`
  width: 47%;
  height: 100%;
  padding: 20px 0;
  /* border: 1px solid green; */

  h3 {
    font-weight: 500;
  }
`;

const MySkills = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SkillWrap = styled.div`
  /* height: 10px; */
  /* border: 1px solid purple; */
  /* .skill-bar {
    height: 5px;
    width: 100%;
    background-color: grey;
    margin: 5px 0;
    position: relative;
    border-radius: 3px;
    margin: 5px 0;

    &:before {
      content: "";
      left: 0;
      top: 0;
      bottom: 0;
      width: 75%;
      position: absolute;
      background-color: var(--color-primary);
      border-radius: 3px;
    }
  } */
`;

const Skill = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const SkillBar = styled.div`
  height: 5px;

  width: 100%;
  background-color: grey;
  margin: 5px 0;
  position: relative;
  border-radius: 3px;
  margin: 5px 0;

  &:before {
    content: "";
    left: 0;
    top: 0;
    bottom: 0;
    width: ${({ progress }) => progress}%;
    position: absolute;
    background-color: var(--color-primary);
    border-radius: 3px;
  }
`;

// width: ${({ progress }) => progress}%;
