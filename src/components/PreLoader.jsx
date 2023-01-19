import React, { useState, useEffect } from "react";

export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div id="main-preloader">
      {loading ? (
        <div className="preloader fadeOut">
          <div className="main-preloader">
            <span></span>
          </div>
        </div>
      ) : (
        children
      )}
    </div>
  );
}
