import { makeid, round } from "./ppg-random.mjs";

//Make SVG fit the current screen size-----------------------------------------
const WINWIDTH  = (window.innerWidth  || document.documentElement.clientWidth );
const WINHEIGHT = (window.innerHeight || document.documentElement.clientHeight);
const HEIGHT    = (typeof(SVGHEIGHT) == 'number') ? SVGHEIGHT : WINHEIGHT;
const WIDTH     = (typeof(SVGWIDTH ) == 'number') ? SVGWIDTH  : WINWIDTH;
const GLOBALS   = {
  'DEBUG' : true,
  'SVGID' : 'S'+makeid(7),
  'TOTAL' : 0,
  'WINW'  : WINWIDTH,
  'WINH'  : WINHEIGHT,
  'WIDTH' : WIDTH,
  'HEIGHT': HEIGHT,
  'MIDX'  : round(WIDTH /2),  
  'MIDY'  : round(HEIGHT/2),  
  'TLC'   : { x:0     , y:0      },
  'TRC'   : { x:WIDTH , y:0      },
  'BLC'   : { x:0     , y:HEIGHT },
  'BRC'   : { x:WIDTH , y:HEIGHT },
};

export default GLOBALS;