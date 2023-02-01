import React from "react";
import styled from "styled-components";
import { device } from "../components/device";

function Footer() {
  return (
    <Container>
      <Wrap>
        <FooterContent>
          <h4>
            2023 Copyright &nbsp; &nbsp;||&nbsp; &nbsp; <span>GSRCoding</span>
          </h4>
        </FooterContent>
      </Wrap>
    </Container>
  );
}

export default Footer;

const Container = styled.footer`
  height: 50px;
  width: 100%;
  background: #000;
  font-family: var(--font-title);
`;

const Wrap = styled.div`
  max-width: 100%;
  width: var(--section-wrap-width);
  margin: 0 auto;
  height: 100%;
  color: #e2e2e2;
`;

const FooterContent = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media ${device.mobileL} {
    padding: 0 10px;
    flex-direction: column;
  }

  h4 {
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: 1.2px;

    @media ${device.mobileL} {
      font-size: 1rem;
      padding-right: 15px;
    }

    span {
      color: var(--color-yellow);
    }
  }
`;
