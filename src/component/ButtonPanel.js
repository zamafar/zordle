import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";
import "./ButtonPanel.css";

export default class ButtonPanel extends React.Component {
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
          <Button name="A" clickHandler={this.handleClick} />
          <Button name="B" clickHandler={this.handleClick} />
          <Button name="C" clickHandler={this.handleClick} />
          <Button name="D" clickHandler={this.handleClick} />
          <Button name="E" clickHandler={this.handleClick} />
          <Button name="F" clickHandler={this.handleClick} />
          <Button name="G" clickHandler={this.handleClick} />
          <Button name="H" clickHandler={this.handleClick} />
          <Button name="I" clickHandler={this.handleClick} />
          <Button name="J" clickHandler={this.handleClick} />
        </div>
        <div>
          <Button name="K" clickHandler={this.handleClick} />
          <Button name="L" clickHandler={this.handleClick} />
          <Button name="M" clickHandler={this.handleClick} />
          <Button name="N" clickHandler={this.handleClick} />
          <Button name="O" clickHandler={this.handleClick} />
          <Button name="P" clickHandler={this.handleClick} />
          <Button name="Q" clickHandler={this.handleClick} />
          <Button name="R" clickHandler={this.handleClick} />
          <Button name="S" clickHandler={this.handleClick} />
          <Button name="T" clickHandler={this.handleClick} />
        </div>
        <div>
          <Button name="Enter" clickHandler={this.handleClick} wide/>
          <Button name="U" clickHandler={this.handleClick} />
          <Button name="V" clickHandler={this.handleClick} />
          <Button name="W" clickHandler={this.handleClick} />
          <Button name="X" clickHandler={this.handleClick} />
          <Button name="Y" clickHandler={this.handleClick} />
          <Button name="Z" clickHandler={this.handleClick} />
          <Button name="<=" clickHandler={this.handleClick} wide/>
        </div>
      </div>
    );
  }
}
