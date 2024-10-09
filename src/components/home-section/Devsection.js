import React from "react";
import { FaMobile } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa";
import { FaVrCardboard } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
import { FaDiceD6 } from "react-icons/fa";

export default function Devsection() {
  return (
    <>
      <div className="dev-section">
        <div className="dev-section-head">
          <h1>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div className="categories">
          <div className="category">
            <div className="category-icon-con">
              <FaMobile className="styled-icon"/>
            </div>
            <p>Mobile Game Development</p>
            <FaArrowRight className="arrow"/>
          </div>

          <div className="category">
            <div className="category-icon-con">
              <FaDesktop className="styled-icon"/>
            </div>
            <p>PC Game Development</p>
            <FaArrowRight className="arrow"/>
          </div>

          <div className="category">
            <div className="category-icon-con">
              <FaPlaystation className="styled-icon"/>
            </div>
            <p>PS4 Game Development</p>
            <FaArrowRight className="arrow"/>
          </div>

          <div className="category">
            <div className="category-icon-con">
              <FaVrCardboard className="styled-icon"/>
            </div>
            <p>AR/VR Solutionst</p>
            <FaArrowRight className="arrow"/>
          </div>

          <div className="category">
            <div className="category-icon-con">
              <FaDiagramProject className="styled-icon"/>
            </div>
            <p>AR/VR Design</p>
            <FaArrowRight className="arrow"/>
          </div>

          <div className="category">
            <div className="category-icon-con">
              <FaDiceD6 className="styled-icon"/>
            </div>
            <p>3D Modelings</p>
            <FaArrowRight className="arrow"/>
          </div>
        </div>
      </div>
    </>
  );
}
