import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";
import "./ButtonPanel.css";

export default class ButtonPanelMid extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };
  state = {
    numTries: 0,
  };
  handleClick = btn => {
    this.props.clickHandler(btn);
    if (btn.props.name === "Enter") {
      this.setState({
        numTries: this.numTries + 1,
      }); 
    }
  };

  render() {
    return (
      <div className="component-button-panel-mid">
        <div>
          <Button name="A" clickHandler={this.handleClick} />
          <Button name="S" clickHandler={this.handleClick} />
          <Button name="D" clickHandler={this.handleClick} />
          <Button name="F" clickHandler={this.handleClick} />
          <Button name="G" clickHandler={this.handleClick} />
          <Button name="h" clickHandler={this.handleClick} />
          <Button name="J" clickHandler={this.handleClick} />
          <Button name="K" clickHandler={this.handleClick} />
          <Button name="L" clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}
