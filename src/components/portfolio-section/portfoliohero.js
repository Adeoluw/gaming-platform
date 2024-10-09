import React from "react";
import { FaUser } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";

export default function Portfoliohero() {
  return (
    <>
      <div className="portfolio-hero">
        <span>
          Home <FaArrowAltCircleRight /> <span>Services</span>
        </span>
        <h1>Lorem Ipsum is simply dummy text of the printing and.</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="history">
          <div className="clients">
            <div className="stat-icon-con">
              <FaUser className="stat-icon" />
            </div>
            <div className="stats">
              <h1>90+</h1>
              <p>Clients</p>
            </div>
          </div>

          <div className="countries">
            <div className="stat-icon-con">
              <FaLocationDot className="stat-icon" />
            </div>
            <div className="stats">
              <h1>30+</h1>
              <p>Countries</p>
            </div>
          </div>

          <div className="projects-stats">
            <div className="stat-icon-con">
              <FaDatabase className="stat-icon" />
            </div>
            <div className="stats">
              <h1>50+</h1>
              <p>Stats</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
