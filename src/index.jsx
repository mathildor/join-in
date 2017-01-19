// import {Component, PropTypes} from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { New_activity } from "./components/New_activity";
import { Existing_activity } from "./components/Existing_activity";
import { Games } from "./components/Games";
import { Router, Route, Link, browserHistory } from 'react-router';
import "./styles/main.css";


//connect the outer world to react by using ReactDOM.render(reactElement, domContainterNode)
ReactDOM.render(
    (
      <Router history={browserHistory}>
          <Route path="/" component={ Root } />
          <Route path="/Home" component={ Home } />
          <Route path="/New-activity" component={ New_activity }/>
          <Route path="/Existing-activity" component={ Existing_activity }/>
          <Route path="/games" component={ Games } />
      </Router>
    ),
    document.getElementById("joinin")
);

//component: prop & state
  //prop = input
  //state = eks checked/unchecked enable/disable altså du definerer selv
