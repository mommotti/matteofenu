import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router, Route,
} from "react-router-dom";
import Home from './contents/Home'
import About from './contents/About'
import Skills from './contents/Skills';
import Projects from './contents/Projects';
import Contact from './contents/Contact';
import Navbar from './components/Navbar';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  render() {
    return (
      < Router >
        <div className="App">
          <div class="burger" >
          </div>
          <Navbar />
          {/* Route for Home.js contents */}
          <Route exact path="/">
            <Home />
          </Route>
          {/* Route for About.js contents */}
          <Route path="/about">
            <About />
          </Route>
          {/* Route for Skills.js contents */}
          <Route path="/skills">
            <Skills />
          </Route>
          {/* Route for Projects.js contents */}
          <Route path="/projects">
            <Projects />
          </Route>
          {/* Route for Contacts.js contents */}
          <Route path="/contact">
            <Contact />
          </Route>
          <div className="copy">
            <hr></hr>
            <p>&copy; 2020 Matteo Fenu</p>
          </div>
        </div>
      </Router >
    )
  }
} export default App;