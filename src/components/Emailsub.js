import React from "react";

export default function Emailsub() {
  return (
    <>
      <div className="leadmagnet-section">
        <div className="leadmagnet-head">
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
              <div className="leadmagnet">
                  <div className="leadmagnet-text">
                      <h3>Stay in the loop</h3>
                      <p>Subscribe to receive the latest news and updates about TDA.
                      We promise not to spam you! </p>
                  </div>
                  <div className="lead-magnet-form">
                      <input placeholder="Enter Email Address" type="email"/>
                      <button>continue</button>
                  </div>
              </div>
      </div>
    </>
  );
}
