import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <Wrap>
        <FooterContent>
          <Left>
            <h4>&copy; 2022 Copyright GSRCoding</h4>
          </Left>
          <Right>
            <h4>Icons</h4>
          </Right>
        </FooterContent>
      </Wrap>
    </Container>
  );
}

export default Footer;

const Container = styled.section`
  height: 50px;
  width: 100%;
  background: #000;
  font-family: var(--font-title);
  /* padding-bottom: 60px; */
`;

const Wrap = styled.div`
  max-width: 100%;
  width: var(--section-wrap-width);
  /* padding-top: 50px; */
  margin: 0 auto;
  height: 100%;
  color: #e2e2e2;
  /* height: auto; */
`;

const FooterContent = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;

  h4 {
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: 1.2px;
  }
`;

const Left = styled.div`
  width: 60%;
`;

const Right = styled.div`
  width: 40%;
  text-align: right;
  /* justify-self: flex-end; */
`;
