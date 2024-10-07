import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Portfolio</li>
          <li>News</li>
          <li className="styled-button">Contact Us</li>
        </ul>
      </nav>
    </div>
  );
}
