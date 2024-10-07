import React from "react";

export default function Projects() {
  return (
    <>
      <div className="project-section">
        <div className="project-section-head">
          <h2>Our Recent Projects</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
              </div>
              <div className="projects">
                  <img src="../images/top-one.png" alt="project x" className="top-three" />
                  <img src="../images/top-two.png" alt="project x" className="top-three" />
                  <img src="../images/top-three.png" alt="project x" className="top-three" />
                  <img src="../images/bottom-one.png" alt="project x" className="different-bottom"/>
                  <img src="../images/bottom-two.png" alt="project x" className="bottom-two"/>
                  <img src="../images/bottom-three.png" alt="project x"  className="bottom-two"/>
              </div>
      </div>
    </>
  );
}
