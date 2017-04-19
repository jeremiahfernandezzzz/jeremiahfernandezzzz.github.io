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
var xCtrSun = 0;
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */
 /* @type {number} */
var yCtrSun = 0;
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */
 /* @type {number} */
var xCtrMoon = 0;
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */
 /* @type {number} */
var yCtrMoon = 0;
var object;
var objectPopAt;
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */
 /* @type {number} */
var charSwitchVal = -2250;
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */
 /* @type {boolean} */
var boolGo = false;
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

 * @return {undefined}
 */
function forward() {
	bgY -= 1;
	bgX -= 5;
	objects_parallax -= 10;
	objects_parallax2 -= 2;
	document/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.querySelector("/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.bg")/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.style/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.transform = "translateX(" + bgX + "px) translateY(" + bgY + "px)";
	document/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.querySelector("/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.object-parallax")/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.style/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.transform = "translateX(" + objects_parallax + "px)";
	document/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.querySelector("/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.object-parallax2")/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.style/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.transform = "translateX(" + objects_parallax2 + "px)";
}
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */

 * @param {?} startEvent
 * @param {number} opt_attributes
 * @return {undefined}
 */
function objectUp(startEvent/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, opt_attributes) {
  if (objects_parallax <= opt_attributes && objects_parallax >= opt_attributes - 1200) {
    document/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.querySelector(startEvent)/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.style/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.bottom = "10vh";
    document/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.querySelector(startEvent)/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.style/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.transition = "bottom 1/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.0s cubic-bezier(/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.17/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */,/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.67/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */,/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.46/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */,/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.99)";
  } else {
    document/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.querySelector(startEvent)/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.style/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.bottom = "-100vh";
    document/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.querySelector(startEvent)/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.style/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.transition = "bottom 1/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.0s cubic-bezier(/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.59/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */,1/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.3/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */,/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.97/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */,1/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.02)";
  }
}
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */

 * @param {?} startEvent
 * @param {number} opt_attributes
 * @return {undefined}
 */
function objectDown(startEvent/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, opt_attributes) {
  if (objects_parallax <= opt_attributes && objects_parallax >= opt_attributes - 1200) {
    document/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.querySelector(startEvent)/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.style/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.top = "0vh";
    document/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.querySelector(startEvent)/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.style/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.transition = "top 1/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.0s cubic-bezier(/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.17/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */,/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.67/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */,/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.46/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */,/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.99)";
  } else {
    document/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.querySelector(startEvent)/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.style/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.top = "-100vh";
    document/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.querySelector(startEvent)/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.style/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.transition = "top 1/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.0s cubic-bezier(/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.59/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */,1/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.3/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */,/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.97/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */,1/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.02)";
  }
}
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */

 * @return {undefined}
 */
function showDialog() {
  if (bgX > -7100) {
    document/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.querySelector("/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.dialog")/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.style/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.visibility = "visible";
  }
}
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */

 * @param {?} dataAndEvents
 * @param {number} opt_attributes
 * @return {undefined}
 */
function changeDialog(dataAndEvents/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, opt_attributes) {
  if (objects_parallax <= opt_attributes && objects_parallax >= opt_attributes - 1E3) {
    document/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.querySelector("/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.dialog")/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.innerHTML = " <br />" + dataAndEvents;
    showDialog();
  }
}
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */

 * @return {undefined}
 */
function hideDialog() {
  document/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.querySelector("/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.dialog")/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.style/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.visibility = "hidden";
}
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */

 * @return {undefined}
 */
function initialDialog() {
  document/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.querySelector("/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.dialog")/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.innerHTML = "<br/>hi! touch or<br />click to ->";
}
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */

 * @return {undefined}
 */
function hideInitialDialog() {
  if (bgX == -10) {
    hideDialog();
  }
}
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */

 * @return {undefined}
 */
function kramerStatic() {
  document/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.querySelector("#kramer")/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.style/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.backgroundPosition = -600 + charSwitchVal + "px";
  document/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.querySelector("#kramer")/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.style/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.animation = "none";
}
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */

 * @param {number} opt_attributes
 * @param {number} expectedNumberOfNonCommentArgs
 * @param {number} lastArrayIdSentFromServer
 * @return {undefined}
 */
function switchChar(opt_attributes/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, expectedNumberOfNonCommentArgs/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, lastArrayIdSentFromServer) {
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
    document/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.querySelector("#kramer")/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.style/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.animation = "animate-char 1/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.0s steps(4) infinite";
  }
  if (charSwitchVal == -750) {
    document/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.querySelector("#kramer")/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.style/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.animation = "animate-char3 1/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.0s steps(4) infinite";
  }
  if (charSwitchVal == -1500) {
    document/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.querySelector("#kramer")/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.style/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.animation = "animate-char5 1/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.0s steps(4) infinite";
  }
  if (charSwitchVal == -2250) {
    document/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.querySelector("#kramer")/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.style/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.animation = "none";
  }
}
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */

 * @return {undefined}
 */
function absorbEvent(event) {
  var e = event || window/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.event;
  e/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.preventDefault && e/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.preventDefault();
  e/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.stopPropagation && e/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.stopPropagation();
  e/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.cancelBubble = true;
  e/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.returnValue = false;
  return false;
}

window/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.addEventListener("touchstart"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, absorbEvent/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, false);
window/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.addEventListener("touchmove"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, absorbEvent/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, false);
window/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.addEventListener("touchend"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, absorbEvent/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, false);
window/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.addEventListener("touchcancel"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, absorbEvent/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, false);

function runTheseFunctionsOnLoad() {
  window/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.setInterval(go/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, 10);
  initialDialog();
  showDialog();
  kramerStatic();
	window/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.addEventListener("mouseup"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, function() {
		window/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.setTimeout(hideDialog/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, 1000);
	}/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, false);

	window/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.addEventListener("touchend"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, function() {
		window/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.setTimeout(hideDialog/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, 1000);
	}/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, false);
}
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */

 * @return {undefined}
 */
function go() {
  if (boolGo == true && objects_parallax >= -19850) {
	forward();
    hideInitialDialog();
    switchChar(-3640/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, -5E3/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, -7500);
    changeDialog("I was Born on<br/>July 5/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, 1997"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, -3640);
    changeDialog("I went<br/>to school"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, -5E3);
    changeDialog("Then college<br/>happened"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, -7500);
    changeDialog("I shifted<br/>courses"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, -8250);
    changeDialog("mech/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */. eng/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.<br/>is hard"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, -9E3);
    changeDialog("<br/>I know stuff"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, -1E4);
    changeDialog("some more stuff"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, -14500);
    changeDialog("and willing to<br/>learn more :D"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, -18500);
    objectUp("/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.hospital"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, -2500);
    objectDown("/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.grade-school"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, -5E3);
    objectUp("/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.high-school"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, -7500);
    objectDown("/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.skill-set"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, -1E4);
    objectDown("/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.html"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, -10750);
    objectDown("/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.css"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, -11750);
    objectDown("/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.javascript"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, -12750);
    objectDown("/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.otherskill-set"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, -14250);
    objectUp("/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.cpp"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, -15250);
    objectUp("/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.mysql"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, -16250);
    objectUp("/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.php"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, -17250);
    objectUp("/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.rotator"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, -19600);
  }
}
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */

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
window/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.addEventListener("load"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, runTheseFunctionsOnLoad/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, false);
window/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.addEventListener("touchstart"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, auto/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, false);
window/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.addEventListener("touchend"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, function() {
  auto();
  kramerStatic();
}/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, false);
window/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.addEventListener("mousedown"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, auto/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, false);
window/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.addEventListener("mouseup"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, function() {
  auto();
  kramerStatic();
}/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, false);

/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */

 * @param {?} startEvent
 * @param {number} opt_attributes
 * @return {undefined}
 */
function objectRotate(startEvent/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */, opt_attributes) {
  if (objects_parallax <= opt_attributes && objects_parallax >= opt_attributes - 900) {
    document/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.querySelector(startEvent)/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.style/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.transform = "rotate(0deg)";
    document/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.querySelector(startEvent)/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.style/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.transition = "transform 1/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.0s cubic-bezier(/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.17/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */,/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.67/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */,/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.46/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */,/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.99)";
  } else {
    if (objects_parallax < opt_attributes) {
      document/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.querySelector(startEvent)/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.style/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.transform = "rotate(-90deg)";
      document/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.querySelector(startEvent)/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.style/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.transition = "transform 1/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.0s cubic-bezier(/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.17/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */,/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.67/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */,/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.46/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */,/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script */.99)";
    }
  }
}
;
  if (boolGo == true && objects_parallax >= -19850) {
	forward();
    hideInitialDialog();
    switchChar(-3640/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script, -5E3/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script, -7500);
    changeDialog("I was Born on<br/>July 5/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script, 1997"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script, -3640);
    changeDialog("I went<br/>to school"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script, -5E3);
    changeDialog("Then college<br/>happened"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script, -7500);
    changeDialog("I shifted<br/>courses"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script, -8250);
    changeDialog("mech/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script. eng/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.<br/>is hard"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script, -9E3);
    changeDialog("<br/>I know stuff"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script, -1E4);
    changeDialog("some more stuff"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script, -14500);
    changeDialog("and willing to<br/>learn more :D"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script, -18500);
    objectUp("/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.hospital"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script, -2500);
    objectDown("/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.grade-school"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script, -5E3);
    objectUp("/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.high-school"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script, -7500);
    objectDown("/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.skill-set"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script, -1E4);
    objectDown("/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.html"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script, -10750);
    objectDown("/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.css"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script, -11750);
    objectDown("/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.javascript"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script, -12750);
    objectDown("/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.otherskill-set"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script, -14250);
    objectUp("/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.cpp"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script, -15250);
    objectUp("/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.mysql"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script, -16250);
    objectUp("/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.php"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script, -17250);
    objectUp("/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.rotator"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script, -19600);
  }
}
/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script

 * @return {undefined}
 */
function auto() {
  if (boolGo == true) {
    /** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script
 @type {boolean} */
    boolGo = false;
  } else {
    /** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script
 @type {boolean} */
    boolGo = true;
  }
}
window/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.addEventListener("load"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script, runTheseFunctionsOnLoad/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script, false);
window/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.addEventListener("touchstart"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script, auto/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script, false);
window/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.addEventListener("touchend"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script, function() {
  auto();
  kramerStatic();
}/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script, false);
window/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.addEventListener("mousedown"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script, auto/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script, false);
window/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.addEventListener("mouseup"/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script, function() {
  auto();
  kramerStatic();
}/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script, false);

/** please email jeremiahfernandezzzz@gmail/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script

 * @param {?} startEvent
 * @param {number} opt_attributes
 * @return {undefined}
 */
function objectRotate(startEvent/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script, opt_attributes) {
  if (objects_parallax <= opt_attributes && objects_parallax >= opt_attributes - 900) {
    document/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.querySelector(startEvent)/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.style/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.transform = "rotate(0deg)";
    document/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.querySelector(startEvent)/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.style/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.transition = "transform 1/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.0s cubic-bezier(/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.17/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script,/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.67/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script,/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.46/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script,/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.99)";
  } else {
    if (objects_parallax < opt_attributes) {
      document/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.querySelector(startEvent)/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.style/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.transform = "rotate(-90deg)";
      document/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.querySelector(startEvent)/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.style/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.transition = "transform 1/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.0s cubic-bezier(/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.17/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script,/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.67/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script,/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.46/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script,/*please email jeremiahfernandezzzz@gmail.com regarding the use of this script.99)";
    }
  }
}
;
