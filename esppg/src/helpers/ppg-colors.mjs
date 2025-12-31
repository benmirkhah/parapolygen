import { randomInt } from "./ppg-random.mjs";

//Generates a random #RRGGBBAA color-------------------------------------------
export function randomColor(pal='random') { 
  //Random color palette by default
  let rrr =  0 ;
  let ggg =  0 ;
  let bbb =  0 ;
  let aaa =  randomInt(64,192) ;
  let hex = '#';

  switch (pal) {
    case 'reds':
      rrr = randomInt(96,256);
      ggg = randomInt(0,96);
      bbb = randomInt(0,96);
      break;
    case 'blues':
      rrr = randomInt(0,96);
      ggg = randomInt(0,96);
      bbb = randomInt(96,256);
      break;
    case 'greens':
      rrr = randomInt(0,96);
      ggg = randomInt(96,256);
      bbb = randomInt(0,96);
      break;
    case 'purples':
      rrr = randomInt(96,256);
      ggg = randomInt(0,96);
      bbb = rrr;
      break;
    case 'yellows':
      rrr = randomInt(96,256);
      ggg = rrr;
      bbb = randomInt(0,96);
      break;
    case 'teals':
      rrr = randomInt(0,96);
      ggg = randomInt(96,256);
      bbb = ggg;
      break;
    case 'grays':
      rrr = randomInt(32,228);
      ggg = rrr;
      bbb = rrr;
      break;
    case 'sunset':  
      rrr = randomInt(96,256);
      ggg = randomInt(32,128);
      bbb = randomInt(96,256);
      aaa = randomInt(32,128);
      break;
    case 'brights':
      rrr = randomInt(128,256);
      ggg = randomInt(128,256);
      bbb = randomInt(128,256);
      aaa = randomInt(128,256);
      break;
    case 'darks':
      rrr = randomInt(0,128);
      ggg = randomInt(0,128);
      bbb = randomInt(0,128);
      aaa = randomInt(0,128);
      break;
    case 'mids':
      rrr = randomInt(64,160);
      ggg = randomInt(64,160);
      bbb = randomInt(64,160);
      aaa = randomInt(64,160);
      break;
    default:
      rrr = randomInt(0,256);
      ggg = randomInt(0,256);
      bbb = randomInt(0,256);
      aaa = randomInt(0,256);
  }

  aaa = (pal=='opaque') ?              255  : aaa;
  aaa = (pal=='clear' ) ?               32  : aaa;
  aaa = (pal=='tint'  ) ? randomInt(32,160) : aaa;

  hex += rrr.toString(16).padStart(2, '0');
  hex += ggg.toString(16).padStart(2, '0');
  hex += bbb.toString(16).padStart(2, '0');
  hex += aaa.toString(16).padStart(2, '0');
  return hex;
}//----------------------------------------------------------------------------

//Syntax sugar for randomColor-------------------------------------------------
export function RC(pal='') { return randomColor(pal); }
//-----------------------------------------------------------------------------

//Splits hex colors into their RGBA decimal values----------------------------- 
export function hex2rgb(hex='') {
  let out = { R:0, G:0, B:0, A:0 };

  if (color) {
    out.R = hex.substring(1,3);
    out.G = hex.substring(3,5);
    out.B = hex.substring(5,7);
    out.A = hex.substring(7,9);
    out.R = parseInt(out.R,16);
    out.G = parseInt(out.G,16);
    out.B = parseInt(out.B,16);
    out.A = parseInt(out.A,16);
  } //console.log(out);  //DEBUG

  return out;
}//----------------------------------------------------------------------------

//Make a hex color out of individual RGBA values-------------------------------
export function rgb2hex({ R=0, G=0, B=0, A=0 } = {}) {
  let out = '#';

  out += R.toString(16).padStart(2, '0');
  out += G.toString(16).padStart(2, '0');
  out += B.toString(16).padStart(2, '0');
  out += A.toString(16).padStart(2, '0');
  
  return out;  
}//----------------------------------------------------------------------------

export default RC;