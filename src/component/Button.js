import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
import { getKeyBGC } from "./AppVars";

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

    return (
      <div className={className.join(" ").trim()}>
       <button 
          style={{backgroundColor: this.state.bgColor}}
          onClick={this.handleClick}>{this.props.name}
        </button>
      </div>
    );
  }
}
