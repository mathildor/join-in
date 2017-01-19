import React from 'react';
import "../styles/home.css";
// <Content />

export class Games extends React.Component<{}, {}> {
  render() {
    return (
      <div id="wrapper">
        <div id ="games">
          <img className="logo" src="../public/images/logo-black.png"></img>
          <h4 className="quote">“It's never too late to join in”</h4>
        </div>
        <div className="second">
        </div>
      </div>
    );
  }
}
