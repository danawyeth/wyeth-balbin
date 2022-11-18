import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <>
      <header className="header" id="header">
        <div className="container flex">
          <h1 className="logo">Wyeth</h1>
          <div className="nav">
            <ul>
             <Link to="intro" spy={true} smooth={true} offset={-10} duration={50}>
                <li>intro</li>
              </Link>   
              <Link to="portfolio" spy={true} smooth={true} offset={-10} duration={50}>
                <li>portfolio</li>
              </Link>
              <Link to="aboutMe" spy={true} smooth={true} offset={-10} duration={50}>
                <li>about me</li>
              </Link>
            </ul>
          </div>
          <button type="button" className="btn">
            LET'S TALK
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;