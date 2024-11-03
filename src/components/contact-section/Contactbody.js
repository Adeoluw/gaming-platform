import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

export default function Contactbody() {
  return (
    <>
      <div className="contact-body">
        <div className="image-section">
          <img src="../images/contact-map.png" alt="map" />
        </div>
        <div className="contact-trio">
          <div className="contact-socials">
            <p>Follow us</p>
            <div className="social-type">
              <FaFacebook className="contact-icon" />
              <FaInstagram className="contact-icon" />
              <FaXTwitter className="contact-icon" />
              <FaLinkedin className="contact-icon" />
            </div>
          </div>
          <div className="phone-contact">
            <FaPhoneVolume className="contact-icon" />
            <p>+94 4444 5555 6</p>
          </div>
          <div className="location-contact">
            <FaLocationDot className="contact-icon" />
            <p>but also the leap into electronic typesetting</p>
          </div>
        </div>
      </div>
    </>
  );
}
