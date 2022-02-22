import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
import { GREEN } from "./AppVars";

export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "white",
    }
  }

  handleClick = () => {
    this.props.clickHandler(this);
  };

  render() {
    const className = [
      "component-button",
      this.props.wide ? "wide" : "",
    ];

    var styles = {
      backgroundColor: this.state.bgColor, 
       color: (this.state.bgColor === GREEN) ? "#FFFFFF" : "#000000",
    } 
    return (
      <div className={className.join(" ").trim()}>
       <button 
          style={styles}
          onClick={this.handleClick}>{this.props.name}
        </button>
      </div>
    );
  }
}
