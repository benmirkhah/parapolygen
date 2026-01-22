import G         from "./globals.mjs";
import { round } from "./randoms.mjs";
import Point     from "../classes/point.mjs";
//-----------------------------------------------------------------------------
export const radialOptions = () => {
  return {
    x      :        G.MID.x, //center
    y      :        G.MID.y, //center
    o      :  G.MID.y - 100, //outer-most ring radius
    r      :             50, //inner-most ring radius
    a      :              0, //Starting angle
    adelta :             15, //Angle  incremental delta
    rdelta :            100, //Radius incremental delta
    rings  :              4, //Number of rings
    jewels :             12, //Jewels per ring
    bound  :              0, //Ignore points outside bounding box?
  };
}//----------------------------------------------------------------------------

//Radial Rings & Jewel grid (calculate R/A delta based on Rings & Jewels)------
export function radialRJ(options = radialOptions()) {
  let r      = options.r;
  let o      = options.o;
  let rings  = options.rings; 
  let jewels = options.jewels;
  let dr     = Math.trunc((o-r) / (rings-1)); //Radius delta in pixels 
  let da     = Math.trunc( 360  /  jewels  ); //Angle delta in degrees
  options.rdelta = dr;
  options.adelta = da;
  return radialGrid(options);
}//----------------------------------------------------------------------------

//Radial Radius & Angle grid (calculate Rings & Jewels based on R/A delta)-----
export function radialRA(options = radialOptions()) {
  let r      = options.r;
  let o      = options.o;
  let dr     = options.rdelta;
  let da     = options.adelta;
  let rings  = Math.trunc((o-r) / dr) + 1; //Number of rings
  let jewels = Math.trunc( 360  / da);     //Jewels per ring
  options.rings  = rings;
  options.jewels = jewels;
  return radialGrid(options);
}//----------------------------------------------------------------------------

//Returns an array of grid points for the requsted options--------------------- 
function radialGrid(options = radialOptions()) {
  let cx     = options.x;
  let cy     = options.y;
  let r      = options.r;
  let o      = options.o;
  let a      = options.a;
  let dr     = options.rdelta;
  let da     = options.adelta;
  let bound  = options.bound;
  let rings  = options.rings;
  let jewels = options.jewels;
  let points = [ new Point({ id:'zero', x:cx , y:cy, r, a }) ]; //index 0 is the center mark 
  let nudge  = (2 * Math.PI)/jewels; //360 degrees is (2 * Pi) in radians
  let ignore = 0; //Number of ignored points
  let radius = 0; //Radius of each ring
  let radian = 0; //Angle in radian
  let angle  = 0; //Angle in degrees
  let msg    = '';
  let num    = 1;
  let x      = 0;
  let y      = 0;

  //Radial Clockwise
  for (let ring=0; ring<rings; ring++) {
    for(let jewel=0; jewel<jewels; jewel++) {
      radius = r + (ring * dr); //Inner ring + each delta
      radian = nudge * (jewel + 0.001); //Fixes rounding error
      angle  = round(radian*(180/Math.PI));
      x = round(cx + (radius * Math.cos(radian)));
      y = round(cy + (radius * Math.sin(radian)));
      if (bound && ((x<0) || (x>G.WIDTH) || (y<0) || (y>G.HEIGHT))) {
        msg += ((x<0) || (x>G.WIDTH))  ? 'Ignored out of bounds (X: '+x+') ':'Even with a normal    (X: '+x+') ';  
        msg += ((y<0) || (y>G.HEIGHT)) ? 'Ignored out of bounds (Y: '+y+') ':'Even with a normal    (Y: '+y+') '; 
        msg += '\r\n';
        ignore++;        
      } else {
        points[num] = new Point({ id:num, x:x , y:y, r:radius, a:(jewel*da) }); //skip index 0
        num++;
      }
    }
  }

  if (G.DEBUG) {
    console.log(points);
    if (bound) {
      console.log(ignore+' points where ignored for being out of bounds');
      console.log(msg);
    }
  }

  return points;
}//----------------------------------------------------------------------------
