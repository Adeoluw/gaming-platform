import React from "react";

export default function Hero() {
 
  return (
    <>
      <div className="hero-section">
        <img alt="img" src="../images/unity.png" />
        <img className="unreal" alt="img" src="../images/unreal.png" />
        <div className="hero-text">
          <span>3D game Dev</span>
          <h1>Work that we produce for our clients</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
          <button>Get more details</button>
        </div>
        <div className="hero-img">
          <img alt="img" src="../images/rocket.png" />
        </div>
      </div>
    </>
  );
}
