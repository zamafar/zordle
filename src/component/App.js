import React from "react";
import Banner from "./Banner";
import DisplayRow from "./DisplayRow";
import ButtonPanelTop from "./ButtonPanelTop";
import ButtonPanelMid from "./ButtonPanelMid";
import ButtonPanelBot from "./ButtonPanelBot";
import {  getActiveRow, getActiveCol, decrementActiveCol, displayChars, 
          displayCols, initialiseState, nextCol, nextRow, checkWord, dotd,
          wotd, wordBtns, clearWordBtns, saveState,
          WORDLEN, NUMTRIES,
	  GREEN, ORANGE, WHITE } from "./AppVars";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
//import { check } from "prettier";

function createResultGrid() {
  var amberSq = String.fromCodePoint(0x1F7E8);
  var greenSq = String.fromCodePoint(0x1F7E9);
  var blackSq = String.fromCodePoint(0x2B1B);
  var resGrid = "";

  var maxSq = getActiveRow() * WORDLEN + getActiveCol();
  for (var i=0; i<maxSq; i++) {
    if (displayCols[i] === GREEN) {
      resGrid = resGrid + greenSq;
    } else if (displayCols[i] === ORANGE) {
      resGrid = resGrid + amberSq;
    } else if (displayCols[i] === WHITE) {
      resGrid = resGrid + blackSq;
    }
    if (((i+1) % WORDLEN) === 0) {
      resGrid = resGrid + "\n";
    }
  }
  return resGrid;
}

const copyToClipboard = (content, doc) => {
  const el = doc.createElement('textarea');
  el.value = content;
  doc.body.appendChild(el);
  el.select();
  doc.execCommand('copy');
  doc.body.removeChild(el);
};

export default class App extends React.Component {
  state = {
    numTries: 0,
  };

  constructor() {
    super();
    this.numTries = 0;
    initialiseState();
  };

  setButtonBGCGrey = btn => {
    btn.setState({
      bgColor: (wotd.indexOf(btn.props.name) === -1) ? "#DEB887": GREEN,
    });
  };

  

  handleClick = btn => {
    var index = getActiveRow()*WORDLEN + getActiveCol();
    var buttonName = btn.props.name;
    var copyTxt = "";
    var resGrid = "";
    var okToCopy = false;
    var doc = document;

    if (buttonName === "<=") {
      if (getActiveCol() > 0) {
        displayChars[index-1] = "!";
        displayCols[index-1] = "black"
        wordBtns.pop();
        decrementActiveCol();
        this.setState({
          numTries: this.numTries + 1,
        }); 
      }
      return;
    }
    if (buttonName === "Enter") {
      if (getActiveCol() === WORDLEN) {
        //saveState();
        var res = checkWord();
        if (res === 0) {
          alert("Invalid word")
          return;
        }
        else if (res === 1) {
          if (getActiveRow() === (NUMTRIES-1)) {
            resGrid = createResultGrid();
            copyTxt = "Zordle for " + dotd.toLocaleDateString() + "\n";
            copyTxt = copyTxt + (getActiveRow()+1) + "/" + NUMTRIES + "\n\n";
            copyTxt = copyTxt + resGrid + "\n";
            okToCopy = window.confirm("You Lost!\nThe word was " + wotd + "\n\n" + copyTxt + "\nCopy the result?");
            if (okToCopy) {
              copyToClipboard(copyTxt, doc);
              alert("Result copied to Clipboard");
            }
          }
	  nextRow();
        }
        else if (res === 2) {
          resGrid = createResultGrid();
          copyTxt = "Zordle for " + dotd.toLocaleDateString() + "\n";
          copyTxt = copyTxt + (getActiveRow()+1) + "/" + NUMTRIES + "\n\n";
          copyTxt = copyTxt + resGrid + "\n";
          okToCopy = window.confirm("You Got It!\n\n" + copyTxt + "\nCopy the result?");
          if (okToCopy) {
            copyToClipboard(copyTxt, doc);
            alert("Result copied to Clipboard");
          }
        }
        this.setState({
          numTries: this.numTries + 1,
        }) 
        wordBtns.forEach(this.setButtonBGCGrey);
        clearWordBtns();
      }
      return;
    }
    if (getActiveCol() >= WORDLEN) {
      return;
    }
    displayChars[index] = buttonName;
    displayCols[index] = "#FFE4C4"; // Colour = Bisque
    wordBtns.push(btn);
    nextCol();

    this.setState({
      numTries: this.numTries + 1,
    })
  };

  render() {
    return (
      <div className="component-app">
        <ErrorBoundary>
          <Banner />
          <DisplayRow numTries = {this.numTries} />
          <ButtonPanelTop clickHandler={this.handleClick} />
          <ButtonPanelMid clickHandler={this.handleClick} />
          <ButtonPanelBot clickHandler={this.handleClick} />
        </ErrorBoundary>
      </div>
    );
  }
}
