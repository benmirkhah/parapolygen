const VERSION = '0.051'; //Commits + 1
import G      from './utils/globals.mjs';
import svgTag from './svgtags/svg.mjs';
import config from './config/config.mjs';
//Syntax sugar---------------------------
function CL(x) { return G.DEBUG ? console.log(x) : false; }
//--------------------------------------------------------------

CL(config);

const SVG     = svgTag(G.SVGID);
const FILES   = {};
const HISTORY = [];

HISTORY.unshift(G.SVGID); //Adds newest id on top
FILES[G.SVGID] = SVG;     //Store the rendered file
if (HISTORY.length > 5) { //Keep the last 5 files only 
  delete FILES[HISTORY.pop()];
} //CL(FILES); 

document.querySelector('#ppgsvg').innerHTML = SVG;
