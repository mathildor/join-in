import React from 'react';
// import "../styles/new-game.css";
import { Router, Route, Link, browserHistory } from 'react-router';


export class Notification extends React.Component<{}, {}> {
  render() {
    var divStyle={
      marginLeft: '67.5%',
      marginTop: '1%'
    }

    var style={
      width: '100%',
      right: '0'
    }
    return (
      <div style={divStyle} className="absolute" id="notification">
        <img style={style} src="../public/images/notification.png"></img>
      </div>
    );
  }
}
