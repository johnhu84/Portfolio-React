import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from '../components/LandingPage';
import About from '../components/About';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

const Main = () => (
  <Switch>
    <Route exact path='/' component={LandingPage} />
    <Route exact path='/about' component={About} />
    <Route exact path='/projects' component={Projects} />
    <Route exact path='/blog' component={Blog} />
    <Route exact path='/contact' component={Contact} />
  </Switch>
);

export default Main;
