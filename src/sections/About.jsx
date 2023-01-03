import React from "react";
import styled from "styled-components";
import { FaReact } from "react-icons/fa";
import { SlDiamond } from "react-icons/sl";
import { AiOutlineRocket } from "react-icons/ai";

function About() {
  return (
    <Container id="about">
      <AboutWrap>
        <h1>
          <span>Welcome to My World</span>
          <div></div>
        </h1>
        <p>
          I'm a young tech enthusiast and entrepreneur who loves to take risks.
          I grew up in a tech-loving family in northern Toronto, Ont. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Id accusamus,
          blanditiis modi voluptas laudantium tempore possimus, nulla saepe
          labore molestiae sit aliquid earum illo voluptates impedit qui. Quod
          porro sed, numquam pariatur, architecto consequuntur maiores quae
          maxime nesciunt nostrum, unde culpa asperiores omnis deleniti modi
          iste iusto vel commodi perspiciatis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dicta
          dolorum quaerat praesentium molestiae aliquam facilis animi vel,
          sapiente reiciendis, dignissimos quod modi placeat? Vero esse at fuga
          beatae tempora atque illum sapiente, doloribus qui eos voluptatibus
          architecto eius fugit minima molestiae corrupti earum placeat dolor
          autem ab nemo! Obcaecati, doloribus. Vel cumque placeat eos ea
          necessitatibus sit pariatur iste repellat. Quis numquam voluptate
          expedita veritatis iste alias dignissimos ab vitae eius magni? A
          dolorem, nesciunt quibusdam velit similique, itaque, numquam tenetur
          ipsam distinctio et voluptas vel minima iste omnis laborum ad eos ab
          esse. Corrupti ratione quasi cumque minus!
        </p>

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
    background: linear-gradient(to bottom, #000, #0003 70%, #0000);
    position: absolute;
    z-index: 5;
  }

  /* &:after {
    content: "";
    width: 100%;
    height: 200px;
    background: linear-gradient(to bottom, #000, #0003 50%, #0000);
    position: absolute;
  } */

  font-family: var(--font-title);
  padding: 40px 0;
  /* border-bottom: 1px solid grey;
  border-top: 1px solid grey; */
`;

const AboutWrap = styled.div`
  max-width: 100%;
  width: var(--section-wrap-width);
  margin: 0 auto;
  height: 100%;
  color: #e2e2e2;

  position: relative;
  z-index: 7;
  /* height: auto; */
  > p {
    text-align: center;
    font-size: 1.4rem;
    padding: 10px 0;
    margin-bottom: 40px;
  }

  h1 {
    margin-top: 20px;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 2rem;
    letter-spacing: 0.8px;
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
