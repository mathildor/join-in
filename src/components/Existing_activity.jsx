import React from 'react';
import "../styles/existing-activity.css";
import { Router, Route, Link, browserHistory } from 'react-router';

// <Content />

export class Existing_activity extends React.Component<{}, {}> {
  render() {
    return (
      <div id="wrapper" className="existing-activity-page full-width">
        <Link to="/home"><img className="back absolute" src="../public/images/back-dark.png"></img></Link>
        <div className="center-div main-area" >
          <img className="background" src="../public/images/existing-activity/bakgrunn4.png"></img>
          <div className="absolute">
            <img className="logo" src="../public/images/LOGO.png"></img>
          </div>
          <div className="absolute full-width">

            <div className="center-div grid-div">
              <div className="inline">
                <Grid_box eventName="Ticket to ride" color="#dcdcdc" person="pers.png" freeSpace="+3" persFarge="#47b88f" />
                <Grid_box eventName="Debate: Will Trump change tactics post his election?" color="#dcdcdc" person="pers.png" freeSpace="+6" persFarge="#47b88f" />
                <Grid_box eventName="Ticket to ride" color="#dcdcdc" person="pers.png" freeSpace="+3" persFarge="#47b88f" />
              </div>
              <div className="center-div row2">
                <div className=" inline center-div short">
                  <Grid_box eventName="Ticket to ride" color="#6BC4D8" person="pers-hvit.png" persFarge="white" freeSpace="+3"/>
                  <Grid_box eventName="Ticket to ride" color="#6BC4D8" person="pers-hvit.png" persFarge="white" freeSpace="+3"/>
                </div>
              </div>
              {/* <img className="grid" src="../public/images/existing-activity/rutenett.png"></img> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Grid_box extends React.Component<{}, {}> {
  render() {
    var style={
      backgroundColor: this.props.color
    }
    var persColor={
      color: this.props.persFarge
    }
    var persUrl = "../public/images/existing-activity/"+ this.props.person;
    return (
    <div id="grid-box">
      <div className="box-shape center-div" style={style}>
        <div className="box-content">
          <div className="inline person-info center-div">
            <h4 className="nr" style={persColor} >{this.props.freeSpace}</h4>
            <img className="personImg" src={persUrl}></img>
          </div>
          <h4 className="event-name">{ this.props.eventName}</h4>
        </div>
      </div>
    </div>
    );
  }
}
Grid_box.propTypes = {
  color: React.PropTypes.string.isRequired,
  eventName: React.PropTypes.string.isRequired,
  freeSpace: React.PropTypes.string.isRequired,
  persFarge: React.PropTypes.string.isRequired,
  person: React.PropTypes.string.isRequired
};
