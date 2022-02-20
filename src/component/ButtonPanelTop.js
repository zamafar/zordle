import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";
import "./ButtonPanel.css";

export default class ButtonPanelTop extends React.Component {
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
      <div className="component-button-panel">
        <div>
          <Button name="Q" clickHandler={this.handleClick} />
          <Button name="W" clickHandler={this.handleClick} />
          <Button name="E" clickHandler={this.handleClick} />
          <Button name="R" clickHandler={this.handleClick} />
          <Button name="T" clickHandler={this.handleClick} />
          <Button name="Y" clickHandler={this.handleClick} />
          <Button name="U" clickHandler={this.handleClick} />
          <Button name="I" clickHandler={this.handleClick} />
          <Button name="O" clickHandler={this.handleClick} />
          <Button name="P" clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}
