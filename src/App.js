import './styles/app.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Intro from './components/Intro';


function App() {
  return (
    <>
    <div className="main">
      <Header/>
      <Intro/>
      </div>
    </>
  );
}

export default App;