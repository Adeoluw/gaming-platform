import React from "react";

export default function Contactform() {
  return (
    <>
      <div className="contact-section-one">
        <h2>
        Say hello
        </h2>
        <p>Lorem Ipsum is simply dummy text of the printing .</p>
      <div className="contact-form">
        <div className="contact-form-name">
          <form>
            <div className="fname">
              <label htmlFor="firstname">First Name:</label>
              <input type="text" name="firstname" />
            </div>
            <div className="lname">
              <label htmlFor="lastname">Last Name:</label>
              <input type="text" name="lastname" />
            </div>
          </form>
        </div>
        <div className="contact-form-email">
          <form>
            <label htmlFor="mail">Enter your email address:</label>
            <input type="email" name="mail" />
          </form>
        </div>
        <div className="contact-form-message">
          <form>
            <label>Message:</label>
            <textarea name="message" cols="30" rows="10" />
          </form>
        </div>
      </div>
      </div>
    </>
  );
}
