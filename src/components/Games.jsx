import React from 'react';
import "../styles/games.css";
import { Router, Route, Link, browserHistory } from 'react-router';


export class Games extends React.Component<{}, {}> {
  render() {
    return (
      <div id="wrapper" className="new-game">
        <Link to="/New-activity"><img className="games-back absolute" src="../public/images/back-dark.png"></img></Link>

        <Link to="/new-cards"><h4 className="menu-text absolute">Cards against humanity</h4></Link>

        <div id ="games-menu">
          <div className="center-div full-width">
            <div className="center-div header">
              <h1>GAMES</h1>
            </div>
          </div>
          <div className="center-div full-width">
            <img id="rutenett" src="../public/images/rutenett-games2.png"></img>
          </div>
        </div>
        <div className="second">
        </div>
      </div>
    );
  }
}
