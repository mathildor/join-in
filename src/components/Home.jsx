import React from 'react';
import "../styles/home.css";
import { Router, Route, Link, browserHistory } from 'react-router';

// <Content />

export class Home extends React.Component<{}, {}> {
  render() {
    return (
      <div id="wrapper" className="home">
        <div id ="home">
          <div className="inline center-div">
            <Link to="/"><img className="back" src="../public/images/home/back-turk.png"></img></Link>
            <div className="center-div">
              <img className="top center-div" src="../public/images/home/top.png"></img>
            </div>
          </div>
          <div className="inline center-div full-width choose">
            <div className="inline center-div">
              <Link to="New-activity"><img className="new-activity" src="../public/images/home/new-activity.png"></img></Link>
              <Link to="Existing-activity"><img className="existing-activity" src="../public/images/home/existing-activity.png"></img></Link>
            </div>
          </div>
          <div className="inline tables">
            <img className="full-table" src="../public/images/home/full-table.png"></img>
            <img className="new-table" src="../public/images/home/new-table.png"></img>
          </div>
        </div>
      </div>
    );
  }
}
