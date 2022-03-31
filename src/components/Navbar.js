import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";
import { CgClose, CgMenu } from "react-icons/cg";

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <div className="Navbar">
      <div className="content open-sans">
        <img className="logo" src={Logo} />
        {windowWidth > 780 ? (
          <div className="links">
            <a>home</a>
            <a>about</a>
            <a>stories</a>
            <a>take action</a>
          </div>
        ) : (
          <div className="dropdown">
            <div className="marine"></div>
            <div className="icon">
              {dropdown ? (
                <CgClose onClick={() => setDropdown(false)} />
              ) : (
                <CgMenu onClick={() => setDropdown(true)} />
              )}
            </div>
            <div className={"links " + dropdown}>
              <a>home</a>
              <a>about</a>
              <a>stories</a>
              <a>take action</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
