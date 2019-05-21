import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';   
import { HashRouter, Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import QuizForm from './components/QuizForm/QuizForm';

class App extends Component {

  render() {
    return (
      <HashRouter basename='/'>
        <div className="App">
          <Navbar/>
          <Route path='/' exact strict component={Home} />
          <Route path='/about' exact strict component={About} />
          <Route path='/contact' exact strict component={Contact} />
          <Route path="/create" exact strict component={QuizForm} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
