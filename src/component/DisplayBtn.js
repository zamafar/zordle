import React from "react";
import PropTypes from "prop-types";
import "./DisplayBtn.css";

export default class DisplayBtn extends React.Component {
  static propTypes = {
    val: PropTypes.string,
    bgc: PropTypes.string,
  };

  render() {
    const className = [
      "display-button",
    ];
    return (
      <div className={className.join(" ").trim()}>
       <button style={{backgroundColor: this.props.bgc}}> {this.props.val} </button>
      </div>
    );
  }
}
