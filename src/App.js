import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';   
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import QuizForm from './components/QuizForm/QuizForm';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: false
    }
  }


  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Route path='/' exact strict component={Home} />
          <Route path='/about' exact strict component={About} />
          <Route path='/contact' exact strict component={Contact} />
          <Route path="/create" exact strict component={QuizForm} />
        </div>
      </Router>
    );
  }
}

export default App;
