import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function Abouthero() {
    return (
        <>
            <div className="about-hero">
                <div className="about-hero-text">
                    <span>Home <FaArrowAltCircleRight /> <span>About</span></span>
                    <h1>Lorem Ipsum is simply dummy text of the printing and.</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <button>Get in touch</button>
                </div>
                <div className="about-hero-img">
                    <img src="../images/abouthero.png" />
                </div>
        </div>
        </>
    )
}