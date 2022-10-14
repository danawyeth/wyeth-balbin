import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
          <div className="container flex">
              <h1 className="logo">Wyeth</h1>
              <div className="nav">
                  <ul>
                      <li><Link to="/intro">intro</Link></li>
                      <li><Link to="/portfolio">portfolio</Link></li>
                      <li><Link to="/about-me">about me</Link></li>
                  </ul>
              </div>
              <button type="button" className="btn">LET'S TALK</button>
          </div>
      </header>
    </>
  );
};

export default Header;
