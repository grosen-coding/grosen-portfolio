import React from "react";
import styled from "styled-components";
import { FaReact } from "react-icons/fa";
import { SlDiamond } from "react-icons/sl";
import { AiOutlineRocket } from "react-icons/ai";

function About() {
  return (
    <Container id="about">
      <AboutWrap>
        <AboutTitle>
          <h1>
            <span>Welcome to My World</span>
            <div></div>
          </h1>
          <p>
            I'm a young tech enthusiast and entrepreneur who loves to take
            risks. I grew up in a tech-loving family in northern Toronto, Ont.
          </p>
        </AboutTitle>

        <AboutContent>
          <ContentCard>
            <div className="card-icon">
              <FaReact />
            </div>
            <h3>Creativity</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              mollitia pariatur fugiat praesentium totam ea!
            </p>
          </ContentCard>
          <ContentCard>
            <div className="card-icon">
              <SlDiamond />
            </div>
            <h3>Dedication</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              blanditiis molestiae a nostrum asperiores obcaecati dignissimos
              nihil laudantium eveniet perferendis.
            </p>
          </ContentCard>
          <ContentCard>
            <div className="card-icon">
              <AiOutlineRocket />
            </div>
            <h3>Hard Work & Commitment</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vel
              perferendis aut explicabo asperiores inventore officia enim.
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
  background-color: #000;
  background-position: center;
  background-position: cover;
  background-repeat: no-repeat;
  font-family: var(--font-title);
  padding: 40px 0;
`;

const AboutWrap = styled.div`
  max-width: 100%;
  width: 1300px;
  margin: 0 auto;
  height: 100%;
  color: #e2e2e2;
  /* height: auto; */
`;

const AboutTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  width: 100%;

  h1 {
    margin-top: 20px;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 2rem;
    letter-spacing: 0.8px;
    position: relative;
  }

  div {
    height: 1px;
    width: 70%;
    background-color: grey;
    margin: 20px auto 25px;
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
`;

const AboutContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const ContentCard = styled.div`
  height: auto;
  padding: 30px;
  width: 30%;
  border-left: 1px solid grey;

  .card-icon {
    color: var(--color-primary);
    font-size: 3rem;
  }

  h3 {
    font-size: 2rem;
    font-weight: 600;
    padding-bottom: 20px;
    /* padding: 20px 0; */
  }
`;
