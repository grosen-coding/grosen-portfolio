import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import styled from "styled-components";
import { device } from "../components/device";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <ToTopButton>
        <FaArrowCircleUp
          onClick={scrollToTop}
          style={{
            display: visible ? "inline" : "none",
            animation: visible ? "scrollTopAppear 0.4s forwards" : "none",
            transition: "display 0.4s",
          }}
        />
      </ToTopButton>
    </>
  );
};

export default ScrollButton;

const ToTopButton = styled.div`
  position: fixed;
  /* width: 100%; */
  right: 40px;
  bottom: 80px;
  height: 20px;
  font-size: 3rem;
  z-index: 50;
  cursor: pointer;
  color: var(--color-yellow);
  opacity: 0.4;
  transition: 0.25s;
  animation: scrollToTop 2s infinite;

  @media ${device.mobileL} {
    right: 20px;
    bottom: 25px;
  }

  &:hover {
    opacity: 0.7;
    transition: 0.25s;
    animation: scrollToTop 0s forwards;
    transform: scale(1.1) !important ;
  }
`;
