import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home'
import Catalog from './components/Catalog/Catalog'
import About from './components/About/About'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/about" component={About} />
    </Switch>
  </Router>
);

export default App;
