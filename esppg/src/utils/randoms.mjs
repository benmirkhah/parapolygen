import GLOBALS from "./globals.mjs";
import Point   from "../classes/point.mjs";

//Needs to be a builtin JS function, grumble-----------------------------------
export function randomInt(min = 0, max = 100) {
  return Math.floor(min + (Math.random() * (max - min)));
}//----------------------------------------------------------------------------

//Syntax sugar for randomInt---------------------------------------------------
export function RI(min = 0, max = 100) { return randomInt(min, max); }
//-----------------------------------------------------------------------------

//Implements CSS style rounding------------------------------------------------
export function round(n=1, factor=1) { return factor * Math.trunc(n/factor); }

//Handy unix time stamp-------------------------------------------------------- 
export function epoch() { //last 8 hex digits by default
  let epoch = Date.now(); 
  return epoch.toString(16);
}//----------------------------------------------------------------------------

//Make a unique ID based on epoch + 3 random digits----------------------------
export function makeid(length = 6) {
  length = (length>14) ? 14 : length; 
  length = (length< 4) ?  3 : length;
  let id = epoch();
  id= id.substring(14 - length);
  id= id+randomInt(100,999);
  id= id.toUpperCase();
  id= id.startsWith('0') ? 'Z'+id.substring(1) : id; //Replace starting 0 with Z
  return id;
}//----------------------------------------------------------------------------

//Shuffle an array-------------------------------------------------------------
export function randomize(array = []) {
  let i    = array.length;
  let j    = 0;
  let temp = 0;

  while (--i > 0) {
    j = Math.floor(Math.random() * (i+1));   
    temp     = array[j];
    array[j] = array[i];
    array[i] =     temp;
  }

  return array;
}//----------------------------------------------------------------------------

//Return a random X cordinate within viewable boundry--------------------------
export function randX(min=1, max=GLOBALS.WIDTH, factor=10) {
  return round(randomInt(min, max), factor);
}
//-----------------------------------------------------------------------------

//Return a random Y cordinate within viewable boundry--------------------------
export function randY(min=1, max=GLOBALS.HEIGHT, factor=10) {
  return round(randomInt(min, max), factor);
}
//-----------------------------------------------------------------------------

//Return a random Point object within viewable boundry-------------------------
export function randomPoint() { return new Point({x:randX(), y:randY()}); }
//-----------------------------------------------------------------------------

//Return a random radial Point object within viewable boundry------------------
export function randomRadial() { return new Point({r:randR(), y:randA()}); }
//-----------------------------------------------------------------------------

export default RI;