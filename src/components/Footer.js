import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-logo-section">
          <h1 className="footer-title-head">LOGO</h1>
          <p className="footer-middle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p>@lorem</p>
        </div>
        <div className="footer-about">
          <ul>
            <li className="footer-about-head footer-title-head">About Us</li>
            <div className="footer-middle footer-li-body">
              <li>Zeux</li>
              <li>Portfolio</li>
              <li>Carrers</li>
            </div>
            <li>contact us</li>
          </ul>
        </div>
        <div className="contact-footer">
          <p className="footer-title-head">contact us</p>
          <p className="footer-middle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p>+908 89097 890</p>
        </div>
        <div className="socials-footer">
          <div className="social">
            <FaFacebook />
          </div>
          <div className="social">
            <FaInstagram />
          </div>
          <div className="social">
            <FaXTwitter />
          </div>
          <div className="social">
            <FaLinkedin />
          </div>
        </div>
      </footer>
    </>
  );
}
