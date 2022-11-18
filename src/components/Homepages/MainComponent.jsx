import React, { Component, useRef } from "react";
import Header from "../Header";
import About from "../pageContent/About";
import Intro from "../pageContent/Intro";
import Portfolio from "../pageContent/Portfolio";
class Main extends Component {
    
  render() {  
    return (
      <>
        <Header />
        <Intro />
        <Portfolio />
        <About/>
      </>
    );
  }
}

export default Main;