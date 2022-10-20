import './styles/app.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Intro from './components/pageContent/Intro';
import HomePages from './components/Homepages/HomePages';
import Portfolio from './components/pageContent/Portfolio'


function App() {
  return (
    <>
    <div className="main">
      <Router>
          <Routes>
              <Route index element={<HomePages/>} />
              
          </Routes>
      </Router>
      </div>
    </>
  );
}

export default App;
