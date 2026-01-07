const VERSION = '0.016'; //Commits + 1
import './style.css';
import svgTag     from './svgtags/svg.mjs';
import G          from './utils/globals.mjs';

function CL(x) { return G.DEBUG ? console.log(x) : false; }

const SVG     = svgTag(G.SVGID);
const FILES   = {};
const HISTORY = [];

HISTORY.unshift(G.SVGID); //Adds newest id on top
FILES[G.SVGID] = SVG;     //Store the rendered file
if (HISTORY.length > 5) { //Keep the last 5 files only 
  delete FILES[HISTORY.pop()];
}
CL(FILES);
document.querySelector('#ppgsvg').innerHTML = SVG;
