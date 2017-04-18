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
var bgX = 0;
/** @type {number} */
var objects_parallax = 0;
/** @type {number} */
var objects_parallax2 = 0;
/** @type {number} */
var bgY = 0;
/**
 * @return {undefined}
 */
function forward() {
	bgY -= 1;
	bgX -= 5;
	objects_parallax -= 10;
	objects_parallax2 -= 2;
	document.querySelector(".bg").style.transform = "translateX(" + bgX + "px) translateY(" + bgY + "px)";
	document.querySelector(".object-parallax").style.transform = "translateX(" + objects_parallax + "px)";
	document.querySelector(".object-parallax2").style.transform = "translateX(" + objects_parallax2 + "px)";
}
/**
 * @param {?} startEvent
 * @param {number} opt_attributes
 * @return {undefined}
 */
function objectUp(startEvent, opt_attributes) {
  if (objects_parallax <= opt_attributes && objects_parallax >= opt_attributes - 1200) {
    document.querySelector(startEvent).style.bottom = "10vh";
    document.querySelector(startEvent).style.transition = "bottom 1.0s cubic-bezier(.17,.67,.46,.99)";
  } else {
    document.querySelector(startEvent).style.bottom = "-100vh";
    document.querySelector(startEvent).style.transition = "bottom 1.0s cubic-bezier(.59,1.3,.97,1.02)";
  }
}
/**
 * @param {?} startEvent
 * @param {number} opt_attributes
 * @return {undefined}
 */
function objectDown(startEvent, opt_attributes) {
  if (objects_parallax <= opt_attributes && objects_parallax >= opt_attributes - 1200) {
    document.querySelector(startEvent).style.top = "0vh";
    document.querySelector(startEvent).style.transition = "top 1.0s cubic-bezier(.17,.67,.46,.99)";
  } else {
    document.querySelector(startEvent).style.top = "-100vh";
    document.querySelector(startEvent).style.transition = "top 1.0s cubic-bezier(.59,1.3,.97,1.02)";
  }
}
/**
 * @return {undefined}
 */
function showDialog() {
  if (bgX > -7100) {
    document.querySelector(".dialog").style.visibility = "visible";
  }
}
/**
 * @param {?} dataAndEvents
 * @param {number} opt_attributes
 * @return {undefined}
 */
function changeDialog(dataAndEvents, opt_attributes) {
  if (objects_parallax <= opt_attributes && objects_parallax >= opt_attributes - 1E3) {
    document.querySelector(".dialog").innerHTML = " <br />" + dataAndEvents;
    showDialog();
  }
}
/**
 * @return {undefined}
 */
function hideDialog() {
  document.querySelector(".dialog").style.visibility = "hidden";
}
/**
 * @return {undefined}
 */
function initialDialog() {
  document.querySelector(".dialog").innerHTML = "<br/>hi! touch or<br />click to ->";
}
/**
 * @return {undefined}
 */
function hideInitialDialog() {
  if (bgX == -10) {
    hideDialog();
  }
}
/**
 * @return {undefined}
 */
function kramerStatic() {
  document.querySelector("#kramer").style.backgroundPosition = -600 + charSwitchVal + "px";
  document.querySelector("#kramer").style.animation = "none";
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
    document.querySelector("#kramer").style.animation = "animate-char 1.0s steps(4) infinite";
  }
  if (charSwitchVal == -750) {
    document.querySelector("#kramer").style.animation = "animate-char3 1.0s steps(4) infinite";
  }
  if (charSwitchVal == -1500) {
    document.querySelector("#kramer").style.animation = "animate-char5 1.0s steps(4) infinite";
  }
  if (charSwitchVal == -2250) {
    document.querySelector("#kramer").style.animation = "none";
  }
}
/**
 * @return {undefined}
 */
function absorbEvent(event) {
  var e = event || window.event;
  e.preventDefault && e.preventDefault();
  e.stopPropagation && e.stopPropagation();
  e.cancelBubble = true;
  e.returnValue = false;
  return false;
}

window.addEventListener("touchstart", absorbEvent, false);
window.addEventListener("touchmove", absorbEvent, false);
window.addEventListener("touchend", absorbEvent, false);
window.addEventListener("touchcancel", absorbEvent, false);

function runTheseFunctionsOnLoad() {
  window.setInterval(go, 10);
  initialDialog();
  showDialog();
  kramerStatic();
}
/**
 * @return {undefined}
 */
function go() {
  if (boolGo == true && objects_parallax >= -19850) {
	forward();
    hideInitialDialog();
    switchChar(-3640, -5E3, -7500);
    changeDialog("I was Born on<br/>July 5, 1997", -3640);
    changeDialog("I went<br/>to school", -5E3);
    changeDialog("Then college<br/>happened", -7500);
    changeDialog("I shifted<br/>courses", -8250);
    changeDialog("mech. eng.<br/>is hard", -9E3);
    changeDialog("<br/>I know stuff", -1E4);
    changeDialog("some more stuff", -14500);
    changeDialog("and willing to<br/>learn more :D", -18500);
    objectUp(".hospital", -2500);
    objectDown(".grade-school", -5E3);
    objectUp(".high-school", -7500);
    objectDown(".skill-set", -1E4);
    objectDown(".html", -10750);
    objectDown(".css", -11750);
    objectDown(".javascript", -12750);
    objectDown(".otherskill-set", -14250);
    objectUp(".cpp", -15250);
    objectUp(".mysql", -16250);
    objectUp(".php", -17250);
    objectUp(".rotator", -19600);
	window.addEventListener("mouseup", function() {
		window.setTimeout(hideDialog, 2E3);
	}, false);
	
	window.addEventListener("touchend", function() {
		window.setTimeout(hideDialog, 2E3);
	}, false);
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
window.addEventListener("load", runTheseFunctionsOnLoad, false);
window.addEventListener("touchstart", auto, false);
window.addEventListener("touchend", function() {
  auto();
  kramerStatic();
}, false);
window.addEventListener("mousedown", auto, false);
window.addEventListener("mouseup", function() {
  auto();
  kramerStatic();
}, false);

/**
 * @param {?} startEvent
 * @param {number} opt_attributes
 * @return {undefined}
 */
function objectRotate(startEvent, opt_attributes) {
  if (objects_parallax <= opt_attributes && objects_parallax >= opt_attributes - 900) {
    document.querySelector(startEvent).style.transform = "rotate(0deg)";
    document.querySelector(startEvent).style.transition = "transform 1.0s cubic-bezier(.17,.67,.46,.99)";
  } else {
    if (objects_parallax < opt_attributes) {
      document.querySelector(startEvent).style.transform = "rotate(-90deg)";
      document.querySelector(startEvent).style.transition = "transform 1.0s cubic-bezier(.17,.67,.46,.99)";
    }
  }
}
;
