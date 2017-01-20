import React from 'react';
import "../styles/existing-activity.css";
import "../styles/gamePopup.css";
import { Router, Route, Link, browserHistory } from 'react-router';

// <Content />

export class GamePopup extends React.Component<{}, {}> {
  render() {
    return (
      <div id="wrapper" className="existing-activity-page full-width popup">
        <div id="overlay"></div>

        <div id="popup-window">
          <Link to="Existing-activity" ><img id="close-button" src="../public/images/close.png"></img></Link>
          <Link to="Existing-activity2" ><img id="join-button" src="../public/images/join-button.png"></img></Link>
          <div className="quote center-div">
            <h2>It's never too late to join in!</h2>
          </div>
        </div>

          <img className="back absolute" src="../public/images/back-dark.png"></img>
          <div className="center-div main-area" >
            <img className="background" src="../public/images/existing-activity/bakgrunn4.png"></img>
            <div className="absolute">
              <img className="logo" src="../public/images/LOGO.png"></img>
            </div>
            <div className="absolute full-width">

              <div className="center-div grid-div">
                <div className="inline">
                  <Grid_box eventName="Ticket to ride" idname="ticket" color="#dcdcdc" person="pers.png" freeSpace="+3" persFarge="#47b88f" />
                  <Grid_box eventName="Debate: Will Trump change tactics post his election?" idname="debate" color="#dcdcdc" person="pers.png" freeSpace="+6" persFarge="#47b88f" />
                  <Grid_box eventName="Alias" idname="alias" color="#dcdcdc" person="pers.png" freeSpace="+7" persFarge="#47b88f" />
                </div>
                <div className="center-div row2">
                  <div className=" inline center-div short">
                    <Link to="cards"><Grid_box eventName="Cards Against Humanity" idname="cards" color="#6BC4D8" person="pers-hvit.png" persFarge="white" freeSpace="+3"/></Link>
                    <Grid_box eventName="Dilemmas" color="#6BC4D8" idname="dilemma" person="pers-hvit.png" persFarge="white" freeSpace="+5"/>
                  </div>
                </div>
                <div className="inline row3">
                  <Grid_box eventName="Quiz" idname="quiz" color="#dcdcdc" person="pers.png" freeSpace="+5" persFarge="#47b88f" />
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
          {this.props.idname?
            <h4 id={this.props.idname} className="event-name">{ this.props.eventName}</h4>
            :<h4 className="event-name">{ this.props.eventName}</h4>
          }
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
  idname: React.PropTypes.string,
  person: React.PropTypes.string.isRequired
};
