import React from "react";

export default function Contactform() {
  return (
    <>
      <div>
        <form>
          <label>
            First Name:
            <input type="text" />
          </label>

          <label>
            Last Name:
            <input type="text" />
          </label>
        </form>
        <form>
          <label>
            Enter your email address:
            <input type="email" />
          </label>
        </form>
        <form>
          <label>
            Message:
            <input type="text" />
          </label>
        </form>
      </div>
    </>
  );
}
