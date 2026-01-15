import { makeid, round } from "./randoms.mjs";
import Point             from "../classes/point.mjs";

//Make SVG fit the current screen size-----------------------------------------
const WINWIDTH  = (window.innerWidth  || document.documentElement.clientWidth );
const WINHEIGHT = (window.innerHeight || document.documentElement.clientHeight);
const HEIGHT    = (typeof(SVGHEIGHT)  == 'number') ? SVGHEIGHT : WINHEIGHT;
const WIDTH     = (typeof(SVGWIDTH )  == 'number') ? SVGWIDTH  : WINWIDTH;
const GLOBALS   = {
  DEBUG   : true,
  SVGID   : makeid(4),
  TOTAL   : 0,
  WINW    : WINWIDTH,
  WINH    : WINHEIGHT,
  WIDTH   : WIDTH,
  HEIGHT  : HEIGHT,
  COLORS  : 40,
  BGC     : '#333333FF', //Background color
  TLC     : new Point({ x:0     , y:0      }),
  TRC     : new Point({ x:WIDTH , y:0      }),
  BLC     : new Point({ x:0     , y:HEIGHT }),
  BRC     : new Point({ x:WIDTH , y:HEIGHT }),
  MID     : new Point({ x:round(WIDTH /2), 
                        y:round(HEIGHT/2)  }),
};
for (const key in GLOBALS) Object.freeze(GLOBALS[key]);

const G = Object.freeze(GLOBALS);

export default G;