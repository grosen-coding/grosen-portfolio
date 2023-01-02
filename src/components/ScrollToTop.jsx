import React, { useState } from "react";

function ScrollToTop() {
  const [toTop, setToTop] = useState(false);

  window.addEventListener("scroll", function (e) {
    let scrollToTop = document.getElementById("to-top");
    if (window.pageYOffset > 300) {
      scrollToTop.classList.add("visible");
    } else {
      scrollToTop.classList.remove("visible");
    }
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id="to-top">
      <div onClick={setToTop(true)}>
        <i className="fa fa-chevron-up"></i>
      </div>
    </div>
  );
}

export default ScrollToTop;
