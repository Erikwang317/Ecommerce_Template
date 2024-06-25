import React from 'react';
import workerImage from '../images/worker.jpg';

const Banner = () => {
  return (
    <div className="bannerContainer">
      <img src={workerImage} alt="Main Banner" className="bannerImage" />
      <div className="bannerContent">
        <h1 className="bannerTitle">
          IT'S NATIONAL SAFETY MONTH.
        </h1>
        <p className="bannerText">
          KEEP SAFETY A TOP PRIORITY.
        </p>
        <button className="bannerButton">
          Learn More
        </button>
      </div>
    </div>
  );
};
export default Banner;
