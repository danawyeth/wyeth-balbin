import './styles/app.scss';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Intro from './components/pageContent/Intro';
import HomePages from './components/Homepages/HomePages';


function App() {
  return (
    <>
    <div className="main">
      <Header/>
      <Router>
          <Switch>
              <Route path="/" exact component={HomePages} />
          </Switch>
      </Router>
      </div>
    </>
  );
}

export default App;
