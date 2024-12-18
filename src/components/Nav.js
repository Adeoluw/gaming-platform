import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";

export default function Header(props) {
  const [mobile, setMobile] = useState(window.innerWidth < 692); // Initial check for screen width

  const [openNav, setOpenNav] = useState(false);

  function aboutPage() {
    props.checkAbout(true);
    props.checkNews(false);

    props.checkHome(false);
    props.checkContact(false);

  }

  function portfolioPage() {
    props.checkPortfolio(true);
    props.checkAbout(false);
    props.checkHome(false);
    props.checkNews(false);
    props.checkContact(false);

  }

  function homePage() {
    props.checkHome(true);
    props.checkAbout(false);
    props.checkPortfolio(false);
    props.checkNews(false);
    props.checkContact(false);

  }

  function newsPage() {
    props.checkHome(false);
    props.checkAbout(false);
    props.checkPortfolio(false);
    props.checkNews(true);
    props.checkContact(false);
  }

  function contactPage() {
    props.checkHome(false);
    props.checkAbout(false);
    props.checkPortfolio(false);
    props.checkNews(false);
    props.checkContact(true);
  }



  // Function to handle window resizing
  const handleResize = () => {
    if (window.innerWidth < 692) {
      setMobile(true); // Switch to mobile view if width is less than 692px
    } else {
      setMobile(false); // Switch to desktop view if width is 692px or more
    }
  };

  function toggleNav() {
    setOpenNav((prevstate) => !prevstate);
  }

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className="header">
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      {mobile && !openNav ? (
        <FaBars className="mobile-menu" onClick={toggleNav} /> // Render the mobile menu icon
      ) : (
        <nav>
          <div className="close-menu">
            <FaWindowClose onClick={toggleNav} />
          </div>
          <ul>
            <li onClick={homePage}>Home</li>
            <li onClick={aboutPage}>About Us</li>
            <li onClick={portfolioPage}>Portfolio</li>
            <li onClick={newsPage}>News</li>
            <li onClick={contactPage} className="styled-button">Contact Us</li>
          </ul>
        </nav>
      )}
    </div>
  );
}
