import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Newsbody from "./Newsbody";

export default function Newshero(props) {
  return (
    <>
      <div className="portfolio-hero">
        <span>
          Home <FaArrowAltCircleRight /> <span>News</span>
        </span>
        <h1>Lorem Ipsum is simply dummy text of the printing and.</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="search-news">
          <FaSearch />
          <input placeholder="search" />
        </div>
      </div>
      <Newsbody />
    </>
  );
}
