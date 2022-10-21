import "./styles/app.scss";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Intro from "./components/pageContent/Intro";
import HomePages from "./components/Homepages/HomePages";
import Portfolio from "./components/pageContent/Portfolio";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="main">
          <Router>
            <Routes>
              <Route index element={<HomePages />} />
            </Routes>
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
