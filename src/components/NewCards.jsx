import React from 'react';
import "../styles/new-game.css";
import { Router, Route, Link, browserHistory } from 'react-router';


export class NewCards extends React.Component<{}, {}> {
  render() {
    return (
      <div id="wrapper" className="new-game">

        <div id="overlay"></div>
        <div className="new-game-popup absolute">
          <Link to="/games" ><img id="close-button" src="../public/images/close.png"></img></Link>
          <img src="../public/images/popup-newEvent.png"></img>
          <div id="member-input" className="absolute center-div">
            <input type="text"></input>
            <input className="second-input" type="text"></input>
          </div>
          <Link to="/games"><img id="new-event-button" src="../public/images/new-event-button.png"></img></Link>
        </div>

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