import React from "react";
import DisplayBtn from "./DisplayBtn";
import {displayChars, displayCols} from "./AppVars"

import "./DisplayRow.css";

export default class Display extends React.Component {
  state = {
    numTries: 0,
  };

  render() {
    return (
      <div className="row-display">
        <div>
        <DisplayBtn val = {displayChars[0]} bgc = {displayCols[0]} />
        <DisplayBtn val = {displayChars[1]} bgc = {displayCols[1]} />
        <DisplayBtn val = {displayChars[2]} bgc = {displayCols[2]} />
        <DisplayBtn val = {displayChars[3]} bgc = {displayCols[3]} />
        <DisplayBtn val = {displayChars[4]} bgc = {displayCols[4]} />
        </div>
        <div>
        <DisplayBtn val = {displayChars[5]} bgc = {displayCols[5]} />
        <DisplayBtn val = {displayChars[6]} bgc = {displayCols[6]} />
        <DisplayBtn val = {displayChars[7]} bgc = {displayCols[7]} />
        <DisplayBtn val = {displayChars[8]} bgc = {displayCols[8]} />
        <DisplayBtn val = {displayChars[9]} bgc = {displayCols[9]} />
        </div>
        <div>
        <DisplayBtn val = {displayChars[10]} bgc = {displayCols[10]} />
        <DisplayBtn val = {displayChars[11]} bgc = {displayCols[11]} />
        <DisplayBtn val = {displayChars[12]} bgc = {displayCols[12]} />
        <DisplayBtn val = {displayChars[13]} bgc = {displayCols[13]} />
        <DisplayBtn val = {displayChars[14]} bgc = {displayCols[14]} />
        </div>
        <div>
        <DisplayBtn val = {displayChars[15]} bgc = {displayCols[15]} />
        <DisplayBtn val = {displayChars[16]} bgc = {displayCols[16]} />
        <DisplayBtn val = {displayChars[17]} bgc = {displayCols[17]} />
        <DisplayBtn val = {displayChars[18]} bgc = {displayCols[18]} />
        <DisplayBtn val = {displayChars[19]} bgc = {displayCols[19]} />
      </div>
        <div>
        <DisplayBtn val = {displayChars[20]} bgc = {displayCols[20]} />
        <DisplayBtn val = {displayChars[21]} bgc = {displayCols[21]} />
        <DisplayBtn val = {displayChars[22]} bgc = {displayCols[22]} />
        <DisplayBtn val = {displayChars[23]} bgc = {displayCols[23]} />
        <DisplayBtn val = {displayChars[24]} bgc = {displayCols[24]} />
        </div>
        <div>
        <DisplayBtn val = {displayChars[25]} bgc = {displayCols[25]} />
        <DisplayBtn val = {displayChars[26]} bgc = {displayCols[26]} />
        <DisplayBtn val = {displayChars[27]} bgc = {displayCols[27]} />
        <DisplayBtn val = {displayChars[28]} bgc = {displayCols[28]} />
        <DisplayBtn val = {displayChars[29]} bgc = {displayCols[29]} />
        </div>  
      </div>
        
    );
  }
}
