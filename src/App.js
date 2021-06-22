import React, { Component, useEffect } from 'react';
import Social from './components/Social'
import './App.css';
import {
  BrowserRouter as Router, Route, useLocation,
  withRouter
} from "react-router-dom";
import { Helmet } from 'react-helmet'
import About from './contents/Home'
import UX from './contents/UX';
import Skills from './contents/Skills';
import Projects from './contents/Projects';
import Graphics from './contents/Graphics';
import Animations from './contents/Animations';
import Navbar from './components/Navbar';

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)
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
      <ScrollToTop>
        <div className="App">
          <div class="burger" >
          </div>
          <Navbar />
          {/* Route for Home.js contents */}
          <Route exact path="/">
            <Helmet>
              <title>About | Matteo Fenu</title>
            </Helmet>
            <About />
          </Route>
          {/* Route for UX.js contents */}
          <Route path="/ux">
            <Helmet>
              <title>UX | Matteo Fenu</title>
            </Helmet>
            <UX />
          </Route>
          {/* Route for Skills.js contents */}
          <Route path="/skills">
            <Helmet>
              <title>Skills | Matteo Fenu</title>
            </Helmet>
            <Skills />
          </Route>
          {/* Route for Projects.js contents */}
          <Route path="/projects">
            <Helmet>
              <title>Projects | Matteo Fenu</title>
            </Helmet>
            <Projects />
          </Route>
          {/* Route for Contacts.js contents */}
          <Route path="/graphics">
            <Helmet>
              <title>Graphics | Matteo Fenu</title>
            </Helmet>
            <Graphics />
          </Route>
          <Route path="/animations">
            <Helmet>
              <title>Animations | Matteo Fenu</title>
            </Helmet>
            <Animations />
          </Route>
          <Social />
        </div>
        </ScrollToTop>
      </Router >
    )
  }
} export default App;