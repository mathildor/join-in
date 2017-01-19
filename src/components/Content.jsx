import React from 'react';
import '../styles/content.css';
import { Router, Route, Link, browserHistory } from 'react-router';


export class Content extends React.Component<{}, IContentState> {
  render(){
    return(
      <div id="home-content" className="content-wrapper">
        <div id="overlay">
          <div className = "overlap">
            <img className="triangle" src="../public/images/triangle.png"></img>
            <Link to="/home"><img className="logo" src="../public/images/logo.png"></img></Link>
          </div>
        </div>
      </div>
    );
  }
}
