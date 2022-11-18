import "./styles/app.scss";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Homepages/MainComponent";
class App extends Component {
    
  render() {
    return (
      <React.Fragment>
        <div className="main">
          <Router>
            <Routes>
              <Route index element={<Main />} />
            </Routes>
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

export default App;