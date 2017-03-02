// import {Component, PropTypes} from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Home2 } from "./components/Home2";
import { New_activity } from "./components/New_activity";
import { Existing_activity } from "./components/Existing_activity";
import { Existing_activity2 } from "./components/Existing_activity2";
import { Games } from "./components/Games";
import { GamePopup } from "./components/GamePopup";
import { NewCards } from "./components/NewCards";
import { YourActivity } from "./components/YourActivity";
import { Router, Route, Link, browserHistory } from 'react-router';
import "./styles/main.css";


//connect the outer world to react by using ReactDOM.render(reactElement, domContainterNode)
ReactDOM.render(
    (
      <Router history={browserHistory}>
          <Route path="/" component={ Root } />
          <Route path="/Home" component={ Home } />
          <Route path="/Home2" component={ Home2 } />
          <Route path="/New-activity" component={ New_activity }/>
          <Route path="/Existing-activity" component={ Existing_activity }/>
          <Route path="/Existing-activity2" component={ Existing_activity2 }/>
          <Route path="/games" component={ Games } />
          <Route path="/cards" component={ GamePopup } />
          <Route path="/new-cards" component={ NewCards } />
          <Route path="/your-activity" component={ YourActivity } />
      </Router>
    ),
    document.getElementById("joinin")
);

//component: prop & state
  //prop = input
  //state = eks checked/unchecked enable/disable altså du definerer selv
