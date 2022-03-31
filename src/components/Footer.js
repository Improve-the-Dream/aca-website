import React from "react";
import Logo from "../assets/Logo.png";
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";

function Footer() {
  return (
    <div className="Footer">
      <img className="logo" src={Logo} />
      <div className="mail">
        Contact Us:{" "}
        <a href="mailto: info@improvethedream.org">info@ImproveTheDream.org</a>
      </div>
      <div className="media">
        <a
          href="https://twitter.com/improvethedream"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
        <a
          href="https://www.instagram.com/improvethedream/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
        <a
          href="https://www.facebook.com/ImproveTheDreamOrg/"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook />
        </a>
      </div>
    </div>
  );
}

export default Footer;
