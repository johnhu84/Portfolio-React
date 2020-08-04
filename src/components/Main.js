import React from './node_modules/react';
import { Switch, Route } from './node_modules/react-router-dom';

import LandingPage from './Components/LandingPage';
import About from './Components/About';
import Projects from './Components/Projects';
import Blog from './Components/Blog';
import Contact from './Components/Contact';

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
