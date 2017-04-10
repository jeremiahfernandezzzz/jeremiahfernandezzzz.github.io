/** @type {Array} */
var _0xfa52 = ["transform", "style", ".bg", "querySelector", "translateX(", "px) translateY(", "px)", ".object-parallax", ".object-parallax2", "bottom", "10vh", "transition", "bottom 1.0s cubic-bezier(.17,.67,.46,.99)", "-100vh", "bottom 1.0s cubic-bezier(.59,1.3,.97,1.02)", "top", "0vh", "top 1.0s cubic-bezier(.17,.67,.46,.99)", "top 1.0s cubic-bezier(.59,1.3,.97,1.02)", "visibility", ".dialog", "visible", "innerHTML", " <br />", "hidden", "<br/>hi! touch or<br />click to ->", "backgroundPosition", 
"#kramer", "px", "animation", "none", "animate-char 1.0s steps(4) infinite", "animate-char3 1.0s steps(4) infinite", "animate-char5 1.0s steps(4) infinite", "setInterval", "I was Born on<br/>July 5, 1997", "I went<br/>to school", "Then college<br/>happened", "I shifted<br/>courses", "mech. eng.<br/>is hard", "<br/>I know stuff", "some more stuff", "and willing to<br/>learn more :D", ".hospital", ".grade-school", ".high-school", ".skill-set", ".html", ".css", ".javascript", ".otherskill-set", ".cpp", 
".mysql", ".php", ".rotator", "title", "load", "addEventListener", "touchstart", "touchend", "setTimeout", "mousedown", "mouseup", "rotate(0deg)", "transform 1.0s cubic-bezier(.17,.67,.46,.99)", "rotate(-90deg)"];
/** @type {number} */
var xCtrSun = 0;
/** @type {number} */
var yCtrSun = 0;
/** @type {number} */
var xCtrMoon = 0;
/** @type {number} */
var yCtrMoon = 0;
var object;
var objectPopAt;
/** @type {number} */
var charSwitchVal = -2250;
/** @type {boolean} */
var boolGo = false;
/** @type {number} */
var bg = 0;
/** @type {number} */
var objects_parallax = 0;
/** @type {number} */
var objects_parallax2 = 0;
/** @type {number} */
var bg1 = 0;
/**
 * @return {undefined}
 */
function forward() {
  document[_0xfa52[3]](_0xfa52[2])[_0xfa52[1]][_0xfa52[0]] = _0xfa52[4] + bg + _0xfa52[5] + bg1 + _0xfa52[6];
  bg1 -= 1;
  bg -= 5;
  document[_0xfa52[3]](_0xfa52[7])[_0xfa52[1]][_0xfa52[0]] = _0xfa52[4] + objects_parallax + _0xfa52[6];
  document[_0xfa52[3]](_0xfa52[8])[_0xfa52[1]][_0xfa52[0]] = _0xfa52[4] + objects_parallax2 + _0xfa52[6];
  objects_parallax -= 10;
  objects_parallax2 -= 2;
}
/** @type {boolean} */
var whatever = false;
/**
 * @param {?} startEvent
 * @param {number} opt_attributes
 * @return {undefined}
 */
function objectUp(startEvent, opt_attributes) {
  if (objects_parallax <= opt_attributes && objects_parallax >= opt_attributes - 1200) {
    document[_0xfa52[3]](startEvent)[_0xfa52[1]][_0xfa52[9]] = _0xfa52[10];
    document[_0xfa52[3]](startEvent)[_0xfa52[1]][_0xfa52[11]] = _0xfa52[12];
  } else {
    document[_0xfa52[3]](startEvent)[_0xfa52[1]][_0xfa52[9]] = _0xfa52[13];
    document[_0xfa52[3]](startEvent)[_0xfa52[1]][_0xfa52[11]] = _0xfa52[14];
  }
}
/**
 * @param {?} startEvent
 * @param {number} opt_attributes
 * @return {undefined}
 */
function objectDown(startEvent, opt_attributes) {
  if (objects_parallax <= opt_attributes && objects_parallax >= opt_attributes - 1200) {
    document[_0xfa52[3]](startEvent)[_0xfa52[1]][_0xfa52[15]] = _0xfa52[16];
    document[_0xfa52[3]](startEvent)[_0xfa52[1]][_0xfa52[11]] = _0xfa52[17];
  } else {
    document[_0xfa52[3]](startEvent)[_0xfa52[1]][_0xfa52[15]] = _0xfa52[13];
    document[_0xfa52[3]](startEvent)[_0xfa52[1]][_0xfa52[11]] = _0xfa52[18];
  }
}
/**
 * @return {undefined}
 */
function showDialog() {
  if (bg > -7100) {
    document[_0xfa52[3]](_0xfa52[20])[_0xfa52[1]][_0xfa52[19]] = _0xfa52[21];
  }
}
/**
 * @param {?} dataAndEvents
 * @param {number} opt_attributes
 * @return {undefined}
 */
function changeDialog(dataAndEvents, opt_attributes) {
  if (objects_parallax <= opt_attributes && objects_parallax >= opt_attributes - 1E3) {
    document[_0xfa52[3]](_0xfa52[20])[_0xfa52[22]] = _0xfa52[23] + dataAndEvents;
    showDialog();
  }
}
/**
 * @return {undefined}
 */
function hideDialog() {
  document[_0xfa52[3]](_0xfa52[20])[_0xfa52[1]][_0xfa52[19]] = _0xfa52[24];
}
/**
 * @return {undefined}
 */
function initialDialog() {
  document[_0xfa52[3]](_0xfa52[20])[_0xfa52[22]] = _0xfa52[25];
}
/**
 * @return {undefined}
 */
function hideInitialDialog() {
  if (bg == -10) {
    hideDialog();
  }
}
/**
 * @return {undefined}
 */
function kramerStatic() {
  document[_0xfa52[3]](_0xfa52[27])[_0xfa52[1]][_0xfa52[26]] = -600 + charSwitchVal + _0xfa52[28];
  document[_0xfa52[3]](_0xfa52[27])[_0xfa52[1]][_0xfa52[29]] = _0xfa52[30];
}
/**
 * @param {number} opt_attributes
 * @param {number} expectedNumberOfNonCommentArgs
 * @param {number} lastArrayIdSentFromServer
 * @return {undefined}
 */
function switchChar(opt_attributes, expectedNumberOfNonCommentArgs, lastArrayIdSentFromServer) {
  if (objects_parallax <= opt_attributes) {
    /** @type {number} */
    charSwitchVal = -1500;
  }
  if (objects_parallax <= expectedNumberOfNonCommentArgs) {
    /** @type {number} */
    charSwitchVal = -750;
  }
  if (objects_parallax <= lastArrayIdSentFromServer) {
    /** @type {number} */
    charSwitchVal = 0;
  }
  if (charSwitchVal == 0) {
    document[_0xfa52[3]](_0xfa52[27])[_0xfa52[1]][_0xfa52[29]] = _0xfa52[31];
  }
  if (charSwitchVal == -750) {
    document[_0xfa52[3]](_0xfa52[27])[_0xfa52[1]][_0xfa52[29]] = _0xfa52[32];
  }
  if (charSwitchVal == -1500) {
    document[_0xfa52[3]](_0xfa52[27])[_0xfa52[1]][_0xfa52[29]] = _0xfa52[33];
  }
  if (charSwitchVal == -2250) {
    document[_0xfa52[3]](_0xfa52[27])[_0xfa52[1]][_0xfa52[29]] = _0xfa52[30];
  }
}
/**
 * @return {undefined}
 */

function absorbEvent_(event) {
  var e = event || window.event;
  e.preventDefault && e.preventDefault();
  e.stopPropagation && e.stopPropagation();
  e.cancelBubble = true;
  e.returnValue = false;
  return false;
}

function preventLongPressMenu(node) {
  node.ontouchstart = absorbEvent_;
  node.ontouchmove = absorbEvent_;
  node.ontouchend = absorbEvent_;
  node.ontouchcancel = absorbEvent_;
}

function init() {
  preventLongPressMenu(document);
}

function runTheseFunctionsOnLoad() {
  init();
  window[_0xfa52[34]](go, 10);
  initialDialog();
  showDialog();
  kramerStatic();
  changeText();
}
/**
 * @return {undefined}
 */
function go() {
  if (boolGo == true && objects_parallax >= -20170) {
    forward();
    hideInitialDialog();
    switchChar(-3640, -5E3, -7500);
    changeDialog(_0xfa52[35], -3640);
    changeDialog(_0xfa52[36], -5E3);
    changeDialog(_0xfa52[37], -7500);
    changeDialog(_0xfa52[38], -8250);
    changeDialog(_0xfa52[39], -9E3);
    changeDialog(_0xfa52[40], -1E4);
    changeDialog(_0xfa52[41], -14500);
    changeDialog(_0xfa52[42], -18500);
    objectUp(_0xfa52[43], -2500);
    objectDown(_0xfa52[44], -5E3);
    objectUp(_0xfa52[45], -7500);
    objectDown(_0xfa52[46], -1E4);
    objectDown(_0xfa52[47], -10750);
    objectDown(_0xfa52[48], -11750);
    objectDown(_0xfa52[49], -12750);
    objectDown(_0xfa52[50], -14250);
    objectUp(_0xfa52[51], -15250);
    objectUp(_0xfa52[52], -16250);
    objectUp(_0xfa52[53], -17250);
    objectUp(_0xfa52[54], -19600);
    document[_0xfa52[3]](_0xfa52[55])[_0xfa52[22]] = objects_parallax;
  }
}
/**
 * @return {undefined}
 */
function auto() {
  if (boolGo == true) {
    /** @type {boolean} */
    boolGo = false;
  } else {
    /** @type {boolean} */
    boolGo = true;
  }
}
window[_0xfa52[57]](_0xfa52[56], runTheseFunctionsOnLoad, false);
window[_0xfa52[57]](_0xfa52[58], auto, false);
window[_0xfa52[57]](_0xfa52[59], function() {
  auto();
  kramerStatic();
  window[_0xfa52[60]](hideDialog, 2E3);
}, false);
window[_0xfa52[57]](_0xfa52[61], auto, false);
window[_0xfa52[57]](_0xfa52[62], function() {
  auto();
  kramerStatic();
  window[_0xfa52[60]](hideDialog, 2E3);
}, false);
/**
 * @param {?} startEvent
 * @param {number} opt_attributes
 * @return {undefined}
 */
function objectRotate(startEvent, opt_attributes) {
  if (objects_parallax <= opt_attributes && objects_parallax >= opt_attributes - 900) {
    document[_0xfa52[3]](startEvent)[_0xfa52[1]][_0xfa52[0]] = _0xfa52[63];
    document[_0xfa52[3]](startEvent)[_0xfa52[1]][_0xfa52[11]] = _0xfa52[64];
  } else {
    if (objects_parallax < opt_attributes) {
      document[_0xfa52[3]](startEvent)[_0xfa52[1]][_0xfa52[0]] = _0xfa52[65];
      document[_0xfa52[3]](startEvent)[_0xfa52[1]][_0xfa52[11]] = _0xfa52[64];
    }
  }
}
;
