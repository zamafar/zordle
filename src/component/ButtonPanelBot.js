import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";
import "./ButtonPanel.css";

export default class ButtonPanelBot extends React.Component {
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
          <Button name="Enter" clickHandler={this.handleClick} wide/>
          <Button name="Z" clickHandler={this.handleClick} />
          <Button name="X" clickHandler={this.handleClick} />
          <Button name="C" clickHandler={this.handleClick} />
          <Button name="V" clickHandler={this.handleClick} />
          <Button name="B" clickHandler={this.handleClick} />
          <Button name="N" clickHandler={this.handleClick} />
          <Button name="M" clickHandler={this.handleClick} />
          <Button name="<=" clickHandler={this.handleClick} wide/>
        </div>
      </div>
    );
  }
}
