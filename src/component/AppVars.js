import wordlist from "./wordlist"

export const WORDLEN = 5;
export const NUMTRIES = 6;

export var wotd = "";
export var notd = 0;
export var dotd = new Date();

export var displayChars = [];
export var displayCols = [];
export var wordBtns = [];

export var activeRow = 0;
export var activeCol = 0;

export var  buttonCols = new Map();
export const GREEN = "#004488";
export const ORANGE = "#DDAA33";
export const WHITE = "#FFFFFF";

// fast random number generator
function mulberry32(a) {
    var t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
}

function generate_wotd() {
  var options = {year: 'numeric'};
  var yyyy = Number(dotd.toLocaleDateString(undefined, options));
  options = {month: '2-digit'};
  var mm = Number(dotd.toLocaleDateString(undefined, options));
  options = {day: '2-digit'};
  var dd = Number(dotd.toLocaleDateString(undefined, options));
  notd = yyyy*31*12 + mm*31 + dd;
  alert("notd is " + notd);
  notd = Math.floor(mulberry32(dotd) * wordlist.length);
  wotd = wordlist[notd];
}

export function saveState() {
   localStorage.setItem("dotd", dotd.toLocaleDateString());
   localStorage.setItem("wotd", wotd);
   localStorage.setItem("displayChars", JSON.stringify(displayChars));
   localStorage.setItem("displayCols", JSON.stringify(displayCols));
   localStorage.setItem("activeRow", JSON.stringify(activeRow));
   localStorage.setItem("activeCol", JSON.stringify(activeCol));
}

export function initialiseState() {
  generate_wotd();
  const stored_dotd = Number(localStorage.getItem("dotd"));
  const stored_wotd = localStorage.getItem("wotd");
  if (stored_dotd === dotd && stored_wotd === wotd) { // restore from previous play
    displayChars = JSON.parse(localStorage.getItem("displayChars"));
    displayCols = JSON.parse(localStorage.getItem("displayCols"));
    buttonCols = JSON.parse(localStorage.getItem("buttonCols")); 
    activeRow = Number(localStorage.getItem("activeRow"));
    activeCol = Number(localStorage.getItem("activeCol"));
  }
  else { // no previous state from same date, initialise to blank state
    for (var row=0; row<NUMTRIES; row++) {
      for (var col=0; col<WORDLEN; col++) {
        var i = row*WORDLEN + col;
        displayChars[i] = "!";
        displayCols[i] = "black";
      }
    }
    const keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var c of keys) {
      buttonCols.set(c, "white");
    }
    buttonCols.set("Enter", "white");
    buttonCols.set("<=", "white");
    
    activeRow = 0;
    activeCol = 0;
  }
};

export function getKeyBGC(c) {

  return buttonCols.get(c);
}

export function nextCol() {
  activeCol = activeCol + 1;
}

export function nextRow() {
  activeRow = activeRow + 1;
  activeCol = 0;
}

export function getActiveCol() {
  return activeCol;
}

export function decrementActiveCol() {
  activeCol = activeCol - 1;
}

export function getActiveRow() {
  return activeRow;
}

export function clearWordBtns() {
  wordBtns = [];
}

export function checkWord() {
  var sow = activeRow*WORDLEN + activeCol - WORDLEN;
  var numGreens = 0;
  var wotd2 = "";
  var tryWord = "";
  for (var i=0; i<WORDLEN; i++){
    tryWord = tryWord + displayChars[sow+i];
  }

  // check validity of word first and return 1 if not valid
  if (wordlist.indexOf(tryWord) === -1) {
    return 0;
  }

  for (i=0; i<WORDLEN; i++) {
    //buttonCols.set(displayChars[sow+i], "grey");
    if (wotd[i] === displayChars[sow+i]){
      displayCols[sow+i] = GREEN;
      numGreens = numGreens + 1;
    }
    else {
      wotd2 = wotd2 + wotd[i];
    }
  }
  for (i=0; i<WORDLEN; i++) {
    if (displayCols[sow+i] !== GREEN) {
      var n = wotd2.indexOf(displayChars[sow+i]);
      if (n !== -1) {
        displayCols[sow+i] = ORANGE;
        wotd2 =  wotd2.slice(0, n) + wotd2.slice(n+1, wotd2.length);
      }
      else {
        displayCols[sow+i] = WHITE;
      }
    }
  }

  if (numGreens === WORDLEN) {
    return 2;
  }
  else {
    return 1;
  }
}
