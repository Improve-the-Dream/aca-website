import React from "react";
import Logo from "../assets/Logo.png";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="content open-sans">
        <img className="logo" src={Logo} />
        <div className="links">
          <a>home</a>
          <a>about</a>
          <a>stories</a>
          <a>take action</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
