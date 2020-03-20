import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import About from './Components/pages/About';
import Hangman from './Components/Hangman';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header.js';
  
//creating 2 links using the router and route functions from react-router-dom
//calling the hangman function inside the react fragment
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" render={props => (
          <React.Fragment>
            <Hangman />
          </React.Fragment>
          )} />
          <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
