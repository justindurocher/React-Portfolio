import React from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from './components/navBar.js';

import Contact from './components/contact.js';

import Portfolio from './components/portfolio.js';

import About from './components/about.js'

function App() {
  return (
    <div className="app">

      <BrowserRouter>

      <NavBar></NavBar>

      <Switch>

        <Route path="/" component={About} exact />
        <Route path="/portfolio" component={Portfolio} exact/>
        <Route path="/contact" component={Contact} exact/>

      </Switch>
      
      </BrowserRouter>

    </div>
      
  );
}

export default App;