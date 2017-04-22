/**
Copyright 2016 Jeremiah Fernandez
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */
 /* @type {number} */
//var object;
//var objectPopAt;
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */
 /* @type {number} */
var charSwitchVal = -2250;
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */
 /* @type {boolean} */
var boolGo = false;
var boolGo_reverse = false;
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */
 /* @type {number} */
var bgX = 0;
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */
 /* @type {number} */
var objects_parallax = 0;
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */
 /* @type {number} */
var objects_parallax2 = 0;
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */
 /* @type {number} */
var bgY = 0;
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */
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

function backward() {
	bgY += 1;
	bgX += 5;
	objects_parallax += 10;
	objects_parallax2 += 2;
	document.querySelector(".bg").style.transform = "translateX(" + bgX + "px) translateY(" + bgY + "px)";
	document.querySelector(".object-parallax").style.transform = "translateX(" + objects_parallax + "px)";
	document.querySelector(".object-parallax2").style.transform = "translateX(" + objects_parallax2 + "px)";
}
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */
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
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */
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
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */
/**
 * @return {undefined}
 */
function showDialog() {
  if (bgX > -7100) {
    document.querySelector(".dialog").style.visibility = "visible";
  }
}
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */
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
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */
/**
 * @return {undefined}
 */
function hideDialog() {
  document.querySelector(".dialog").style.visibility = "hidden";
}
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */
/**
 * @return {undefined}
 */
function initialDialog() {
  document.querySelector(".dialog").innerHTML = "<br/>hi! swipe or<br />click to ->";
}
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */
/**
 * @return {undefined}
 */
function hideInitialDialog() {
  if (bgX == -10) {
    hideDialog();
  }
}
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */
/**
 * @return {undefined}
 */
function kramerStatic() {
  document.querySelector("#kramer").style.backgroundPosition = -600 + charSwitchVal + "px";
  document.querySelector("#kramer").style.animation = "none";
}
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */
/**
 * @param {number} opt_attributes
 * @param {number} expectedNumberOfNonCommentArgs
 * @param {number} lastArrayIdSentFromServer
 * @return {undefined}
 */
function switchChar(opt_attributes, expectedNumberOfNonCommentArgs, lastArrayIdSentFromServer) {
  if (objects_parallax <= opt_attributes) {
    /** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */
 /* @type {number} */
    charSwitchVal = -1500;
  }
  if (objects_parallax <= expectedNumberOfNonCommentArgs) {
    /** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */
 /* @type {number} */
    charSwitchVal = -750;
  }
  if (objects_parallax <= lastArrayIdSentFromServer) {
    /** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */
 /* @type {number} */
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
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */
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
  window.setInterval(go_reverse, 10);
  initialDialog();
  showDialog();
  kramerStatic();
	window.addEventListener("mouseup", function() {
		window.setTimeout(hideDialog, 1000);
	}, false);

	window.addEventListener("touchend", function() {
		window.setTimeout(hideDialog, 1000);
	}, false);
}
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */
/**
 * @return {undefined}
 */
function go() {
  if (boolGo == true && objects_parallax >= -19180) {
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
    objectDown(".title", -500);
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
    objectUp(".rotator", -18250);
  }
}

function go_reverse() {
  if (boolGo_reverse == true && objects_parallax < 0) {
	backward();
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
    objectDown(".title", -500);
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
    objectUp(".rotator", -18250);
  }
}
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */
/**
 * @return {undefined}
 */
function auto() {
  if (boolGo == true) {
    /** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */
 /* @type {boolean} */
    boolGo = false;
  } else {
    /** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */
 /* @type {boolean} */
    boolGo = true;
  }
}

function auto_reverse() {
  if (boolGo_reverse == true) {
    /** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */
 /* @type {boolean} */
    boolGo_reverse = false;
  } else {
    /** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */
 /* @type {boolean} */
    boolGo_reverse = true;
  }
}

window.addEventListener("load", runTheseFunctionsOnLoad, false);
//window.addEventListener("touchstart", auto, false);
window.addEventListener("touchend", function() {
  boolGo = false;
	boolGo_reverse = false
  kramerStatic();
}, false);
window.addEventListener("mousedown", function() {
  boolGo = true;
  kramerStatic();
}, false);
window.addEventListener("mouseup", function() {
  boolGo = false;
	boolGo_reverse = false
  kramerStatic();
}, false);

/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */
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

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;                                                        

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
		boolGo_reverse = false;
		boolGo = true;
        } else {
		boolGo = false;
		boolGo_reverse = true;
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
        } else { 
            /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};
