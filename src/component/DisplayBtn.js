import React from "react";
import PropTypes from "prop-types";
import "./DisplayBtn.css";
import {GREEN} from "./AppVars"

export default class DisplayBtn extends React.Component {
  static propTypes = {
    val: PropTypes.string,
    bgc: PropTypes.string,
  };

  render() {
    const className = [
      "display-button",
    ];
    if (this.props.bgc == GREEN) {
       return (
         <div className={className.join(" ").trim()}>
         <button style={{backgroundColor: this.props.bgc, color: "white"}}> {this.props.val} </button>
         </div>
       );
    }
    else {
       return (
         <div className={className.join(" ").trim()}>
          <button style={{backgroundColor: this.props.bgc}}> {this.props.val} </button>
         </div>
       );
     }
  }
}
