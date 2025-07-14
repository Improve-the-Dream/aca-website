import React, { useState, useEffect } from "react";
import { scrollToSection } from "../functions/Scroll";
import Logo from "../assets/img/ITDLogo.png";
import { CgClose, CgMenu } from "react-icons/cg";

function Navbar(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  function Links() {
    return (
      <>
        <div
          className="link"
          onClick={() => {
            scrollToSection(props.homeRef);
            setDropdown(false);
          }}
        >
          home
        </div>
        <div
          className="link"
          onClick={() => {
            scrollToSection(props.aboutRef);
            setDropdown(false);
          }}
        >
          about
        </div>
        <div
          className="link"
          onClick={() => {
            scrollToSection(props.storiesRef);
            setDropdown(false);
          }}
        >
          stories
        </div>
        <div
          className="link"
          onClick={() => {
            scrollToSection(props.actionRef);
            setDropdown(false);
          }}
        >
          take action
        </div>
      </>
    );
  }

  return (
    <div className="Navbar">
      <div className="content open-sans">
        <div className="temp-replacement-for-logo"></div>
        {/* <img
          className="logo"
          alt="logo"
          src={Logo}
          onClick={() => scrollToSection(props.homeRef)}
        /> */}
        {windowWidth > 780 ? (
          <div className="links">
            <Links />
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
              <Links />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
