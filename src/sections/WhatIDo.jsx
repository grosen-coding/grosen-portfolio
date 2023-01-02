import React from "react";
import styled from "styled-components";

function WhatIDo() {
  return (
    <Container id="what-i-do">
      <Wrap>
        <div>
          <Left>
            <ImgWrap>
              <img src="./img/what-i-do.png" alt="" />
            </ImgWrap>
          </Left>

          <Right>
            <h2>What I Do</h2>
            <h3>I Develop Websites & Debug Code</h3>
            <p>
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
            <div></div>
            <h2>Why Work With Me</h2>
            <h3>Superior Results with Top User Experience</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              qui, odit commodi harum molestias nam soluta vel, unde quae nemo
              itaque, veritatis dolore temporibus corporis in animi accusamus
              hic recusandae rem. Aspernatur modi soluta placeat dolore
              laudantium, debitis sapiente ipsam ad fugiat rerum a quasi
              possimus quisquam, temporibus ipsum expedita.
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
  background-image: linear-gradient(rgba(23, 26, 29, 1), rgba(23, 26, 29, 0.9));
  background-position: center;
  background-position: cover;
  background-repeat: no-repeat;
  font-family: var(--font-title);
  padding: 40px 0;
  position: relative;

  &:after {
    content: "";
    width: 100%;
    bottom: 0;
    height: 100%;
    background: linear-gradient(to top, #000, #0001 70%, #0000);
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

  /* height: auto; */
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
`;

const ImgWrap = styled.div`
  /* background-color: #000; */

  img {
    width: 100%;
    border-radius: 50px;
  }
`;

const Right = styled.div`
  width: 47%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  padding: 20px 0;

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
      border: 10px solid black;
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
  }

  p {
    padding: 10px 0;
  }
`;
