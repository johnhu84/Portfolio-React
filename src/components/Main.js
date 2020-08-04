import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './src/components/LandingPage';
import About from './src/components/About';
import Projects from './src/components/Projects';
import Blog from './src/components/Blog';
import Contact from './src/components/Contact';

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
