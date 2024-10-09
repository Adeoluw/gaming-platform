import React from "react";

export default function MainSectionOne() {
  return (
    <div className="main-sectionone">
      <div className="main-sectionone-head">
        <h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h1>
      </div>

      <div className="main-section-one-text">
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
      </div>
      <div className="main-section-one-image">
        <img src="../images/design.png" className="absolute-design"/>
        <img src="../images/spidey.png" className="spidey" />
      </div>
    </div>
  );
}
