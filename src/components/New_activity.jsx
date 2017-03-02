import React from 'react';
import "../styles/new-activity.css";
import { Router, Route, Link, browserHistory } from 'react-router';
import { Notification } from "./Notification";
// <Content />

export class New_activity extends React.Component<{}, {}> {
    constructor(props) {
        super(props);

        this.state={
          notification: false
        };
        this.showNotification = this.showNotification.bind(this);
    }

    showNotification() {
      this.setState({
        notification:true
      });
    }

    render() {
      console.log(this.state.notification);
      return (
        <div id="wrapper" className="new-activity-page">
          {this.state.notification
            ?<Notification/>
            :<div></div>
          // :<Notification/>
          }
          <Link to="/home2"><img className="back" src="../public/images/back-dark.png"></img></Link>
          <div id ="new-activity">
            <Link to="/games"><img id="games" src="../public/images/games-background2.png"></img></Link>
            <img onClick={this.showNotification} className="logo" src="../public/images/logo-black.png"></img>
            <h4 className="quote">“Don’t be a square, expand your social sphere  - click on a triangle!”</h4>
          </div>
          <div className="second">
            <img id="quiz" src="../public/images/Quiz2.png"></img>
            <img id="dilemmas" src="../public/images/Delimmas.png"></img>
            <img id="debate" src="../public/images/Debate.png"></img>
          </div>
        </div>
      );
  }
}
