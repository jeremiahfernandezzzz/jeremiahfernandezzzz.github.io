var _0xc334=["\x65\x76\x65\x6E\x74","\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74","\x73\x74\x6F\x70\x50\x72\x6F\x70\x61\x67\x61\x74\x69\x6F\x6E","\x63\x61\x6E\x63\x65\x6C\x42\x75\x62\x62\x6C\x65","\x72\x65\x74\x75\x72\x6E\x56\x61\x6C\x75\x65","\x74\x6F\x75\x63\x68\x73\x74\x61\x72\x74","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x74\x6F\x75\x63\x68\x6D\x6F\x76\x65","\x74\x6F\x75\x63\x68\x65\x6E\x64","\x74\x6F\x75\x63\x68\x63\x61\x6E\x63\x65\x6C"];var xCtrSun=0;var yCtrSun=0;var xCtrMoon=0;var yCtrMoon=0;var object;var objectPopAt;var charSwitchVal=-2250;var boolGo=false;var bg=0;var objects_parallax=0;var objects_parallax2=0;var bg1=0;function forward(){document[_0xfa52[3]](_0xfa52[2])[_0xfa52[1]][_0xfa52[0]]= _0xfa52[4]+ bg+ _0xfa52[5]+ bg1+ _0xfa52[6];bg1-= 1;bg-= 5;document[_0xfa52[3]](_0xfa52[7])[_0xfa52[1]][_0xfa52[0]]= _0xfa52[4]+ objects_parallax+ _0xfa52[6];document[_0xfa52[3]](_0xfa52[8])[_0xfa52[1]][_0xfa52[0]]= _0xfa52[4]+ objects_parallax2+ _0xfa52[6];objects_parallax-= 10;objects_parallax2-= 2}function objectUp(_0x1f8exf,_0x1f8ex10){if(objects_parallax<= _0x1f8ex10&& objects_parallax>= _0x1f8ex10- 1200){document[_0xfa52[3]](_0x1f8exf)[_0xfa52[1]][_0xfa52[9]]= _0xfa52[10];document[_0xfa52[3]](_0x1f8exf)[_0xfa52[1]][_0xfa52[11]]= _0xfa52[12]}else {document[_0xfa52[3]](_0x1f8exf)[_0xfa52[1]][_0xfa52[9]]= _0xfa52[13];document[_0xfa52[3]](_0x1f8exf)[_0xfa52[1]][_0xfa52[11]]= _0xfa52[14]}}function objectDown(_0x1f8exf,_0x1f8ex10){if(objects_parallax<= _0x1f8ex10&& objects_parallax>= _0x1f8ex10- 1200){document[_0xfa52[3]](_0x1f8exf)[_0xfa52[1]][_0xfa52[15]]= _0xfa52[16];document[_0xfa52[3]](_0x1f8exf)[_0xfa52[1]][_0xfa52[11]]= _0xfa52[17]}else {document[_0xfa52[3]](_0x1f8exf)[_0xfa52[1]][_0xfa52[15]]= _0xfa52[13];document[_0xfa52[3]](_0x1f8exf)[_0xfa52[1]][_0xfa52[11]]= _0xfa52[18]}}function showDialog(){if(bg>  -7100){document[_0xfa52[3]](_0xfa52[20])[_0xfa52[1]][_0xfa52[19]]= _0xfa52[21]}}function changeDialog(_0x1f8ex14,_0x1f8ex10){if(objects_parallax<= _0x1f8ex10&& objects_parallax>= _0x1f8ex10- 1E3){document[_0xfa52[3]](_0xfa52[20])[_0xfa52[22]]= _0xfa52[23]+ _0x1f8ex14;showDialog()}}function hideDialog(){document[_0xfa52[3]](_0xfa52[20])[_0xfa52[1]][_0xfa52[19]]= _0xfa52[24]}function initialDialog(){document[_0xfa52[3]](_0xfa52[20])[_0xfa52[22]]= _0xfa52[25]}function hideInitialDialog(){if(bg==  -10){hideDialog()}}function kramerStatic(){document[_0xfa52[3]](_0xfa52[27])[_0xfa52[1]][_0xfa52[26]]= -600+ charSwitchVal + _0xfa52[28];document[_0xfa52[3]](_0xfa52[27])[_0xfa52[1]][_0xfa52[29]]= _0xfa52[30]}function switchChar(_0x1f8ex10,_0x1f8ex1a,_0x1f8ex1b){if(objects_parallax<= _0x1f8ex10){charSwitchVal=  -1500};if(objects_parallax<= _0x1f8ex1a){charSwitchVal=  -750};if(objects_parallax<= _0x1f8ex1b){charSwitchVal= 0};if(charSwitchVal== 0){document[_0xfa52[3]](_0xfa52[27])[_0xfa52[1]][_0xfa52[29]]= _0xfa52[31]};if(charSwitchVal==  -750){document[_0xfa52[3]](_0xfa52[27])[_0xfa52[1]][_0xfa52[29]]= _0xfa52[32]};if(charSwitchVal==  -1500){document[_0xfa52[3]](_0xfa52[27])[_0xfa52[1]][_0xfa52[29]]= _0xfa52[33]};if(charSwitchVal==  -2250){document[_0xfa52[3]](_0xfa52[27])[_0xfa52[1]][_0xfa52[29]]= _0xfa52[30]}}function absorbEvent(_0x1f8ex1d){var _0x1f8ex1e=_0x1f8ex1d|| window[_0xc334[0]];_0x1f8ex1e[_0xc334[1]]&& _0x1f8ex1e[_0xc334[1]]();_0x1f8ex1e[_0xc334[2]]&& _0x1f8ex1e[_0xc334[2]]();_0x1f8ex1e[_0xc334[3]]= true;_0x1f8ex1e[_0xc334[4]]= false;return false}window[_0xc334[6]](_0xc334[5],absorbEvent,false);window[_0xc334[6]](_0xc334[7],absorbEvent,false);window[_0xc334[6]](_0xc334[8],absorbEvent,false);window[_0xc334[6]](_0xc334[9],absorbEvent,false);function runTheseFunctionsOnLoad(){window[_0xfa52[34]](go,10);initialDialog();showDialog();kramerStatic();changeText()}function go(){if(boolGo== true&& objects_parallax>=  -19850){forward();hideInitialDialog();switchChar(-3640,-5E3,-7500);changeDialog(_0xfa52[35],-3640);changeDialog(_0xfa52[36],-5E3);changeDialog(_0xfa52[37],-7500);changeDialog(_0xfa52[38],-8250);changeDialog(_0xfa52[39],-9E3);changeDialog(_0xfa52[40],-1E4);changeDialog(_0xfa52[41],-14500);changeDialog(_0xfa52[42],-18500);objectUp(_0xfa52[43],-2500);objectDown(_0xfa52[44],-5E3);objectUp(_0xfa52[45],-7500);objectDown(_0xfa52[46],-1E4);objectDown(_0xfa52[47],-10750);objectDown(_0xfa52[48],-11750);objectDown(_0xfa52[49],-12750);objectDown(_0xfa52[50],-14250);objectUp(_0xfa52[51],-15250);objectUp(_0xfa52[52],-16250);objectUp(_0xfa52[53],-17250);objectUp(_0xfa52[54],-19600);document[_0xfa52[3]](_0xfa52[55])[_0xfa52[22]]= objects_parallax}}function auto(){if(boolGo== true){boolGo= false}else {boolGo= true}}window[_0xfa52[57]](_0xfa52[56],runTheseFunctionsOnLoad,false);window[_0xfa52[57]](_0xfa52[58],auto,false);window[_0xfa52[57]](_0xfa52[59],function(){auto();kramerStatic();window[_0xfa52[60]](hideDialog,2E3)},false);window[_0xfa52[57]](_0xfa52[61],auto,false);window[_0xfa52[57]](_0xfa52[62],function(){auto();kramerStatic();window[_0xfa52[60]](hideDialog,2E3)},false);function objectRotate(_0x1f8exf,_0x1f8ex10){if(objects_parallax<= _0x1f8ex10&& objects_parallax>= _0x1f8ex10- 900){document[_0xfa52[3]](_0x1f8exf)[_0xfa52[1]][_0xfa52[0]]= _0xfa52[63];document[_0xfa52[3]](_0x1f8exf)[_0xfa52[1]][_0xfa52[11]]= _0xfa52[64]}else {if(objects_parallax< _0x1f8ex10){document[_0xfa52[3]](_0x1f8exf)[_0xfa52[1]][_0xfa52[0]]= _0xfa52[65];document[_0xfa52[3]](_0x1f8exf)[_0xfa52[1]][_0xfa52[11]]= _0xfa52[64]}}}
