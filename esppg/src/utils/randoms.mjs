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
export function epoch() {
  let epoch = Date.now();
  return epoch.toString(16);
}//----------------------------------------------------------------------------

//Returns a 16 charachter long hex to create unique IDs with-------------------
export function bighex() {
  let PN = performance.now(); //Percise Number
  let IN = Math.trunc(PN);    //Integer Number
  let RN = PN-IN;             //Rational Number
  let RS = RN.toString();     //Rational String 
  let SN = IN.toString()+     //String Number is PN as string
           RS.substring(2);   //Without 0.
  let BN = BigInt(SN);        //Big Number
  let BH = BN.toString(16);   //Big    Hex (max 16 characters long)
  let EH = epoch();           //Epoch  Hex (max 11 characters long)
  let RH = RI(69905,1048575); //Random Hex (max  5 characters long)
  let OH = RH.toString(16);   //Output Hex (always 16 characters)
  OH = (BH.length > EH.length) ? BH : OH+EH;  
  return OH;
}//----------------------------------------------------------------------------

//Make a unique ID based on performance.now() + 2 random digits----------------
export function makeid(length = 6) {
  length = (length>18) ? 18 : length; 
  length = (length< 4) ?  3 : length;
  let id = bighex();
  id= id.substring(18 - length);
  id= id+randomInt(10,99);
  id= id.toUpperCase();
  id= id.startsWith('0') ? 'Z'+id.substring(1) : id; //Replace starting 0 with Z
  return id;
}//----------------------------------------------------------------------------

//Make a unique ID based on epoch + 3 random digits----------------------------
export function epochID(length = 6) {
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

//CSS clamp, but in JS---------------------------------------------------------
export function clamp(value, min, max) {
  return min < max
    ? (value < min ? min : value > max ? max : value)
    : (value < max ? max : value > min ? min : value);
}
//-----------------------------------------------------------------------------

//Good old JQuery function that should've been built into JS-------------------
export function once(fn, context) { 
  let result = null; //Store the result of the function call
  return function() {
    if (fn) {
      result = fn.apply(context || this, arguments);
      fn = null; //Dereference the function to prevent further calls
    }
    return result;
  };
}//----------------------------------------------------------------------------

export default RI;