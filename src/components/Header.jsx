import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container flex">
          <h1 className="logo">Wyeth</h1>
          <div className="nav">
            <ul>
              <AnchorLink href="#intro">
                <li>intro</li>
              </AnchorLink>
              <AnchorLink href="#portfolio">
                <li>portfolio</li>
              </AnchorLink>
              <AnchorLink href="#aboutMe">
                <li>about me</li>
              </AnchorLink>
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
