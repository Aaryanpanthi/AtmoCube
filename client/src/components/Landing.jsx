import React from 'react';
import "./Landing.css";
import MyImage from './pic1.svg';

const Landing = () => {
  return (
    <div className="main">
      <div className="main__container">
        <div className="main__content">
          <h1>Howard University</h1>
          <h2>Atmocube Status Checking Website</h2>
          <p>Stay informed about the latest status of specific Atmocubes and visualize real-time parameters in a dynamic table on our website.</p>
          <button className="main__btn"><a href="/">WELCOME</a></button>
        </div>
        <div className="main__img--container" style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
          <img src={MyImage} alt="Outlier event visualization" style={{ height: "auto", maxHeight: "300px", width: "auto", maxWidth: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default Landing;

