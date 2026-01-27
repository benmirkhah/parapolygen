import radialGrid           from "../utils/radial.mjs";
import spiralGrid           from "../utils/spiral.mjs";
import cartesianGrid        from "../utils/cartesian.mjs";
import { notSet           } from "./typeutils.mjs";
import { radialOptions    } from "../utils/radial.mjs";
import { spiralOptions    } from "../utils/spiral.mjs";
import { cartesianOptions } from "../utils/cartesian.mjs";
//Syntax sugar--------------------------------------------------
const radial     = 'radial';
const spiral     = 'spiral';
const normal     = 'normal';
const backward   = 'backward';
const vertical   = 'vertical'; 
const vertiback  = 'vertiback';
const snake      = 'snake';
const vsnake     = 'vsnake';
const outward    = 'outward';
const inward     = 'inward';

//Generates points based on the grid type--------------------------------------
function gridPoints(grid) {
  let out = []; //[ new Point({ id:'zero', x:0 , y:0, r:0, a:0 }) ];
  if (notSet(grid)) return out; //return blank if no grid argument

  let options = null;

  //overwrite grid type defaults with this grid's specifics
  switch(grid.kind) {
    case radial:
      options         = radialOptions();
      options.x       = grid.x;
      options.y       = grid.y;
      options.r       = grid.r;
      options.o       = grid.o;
      options.rdelta  = grid.rdelta;
      options.adelta  = grid.adelta;
      options.jewels  = grid.jewels;
      options.rings   = grid.rings;
      options.bound   = grid.bound;
      options.order   = grid.order;
      out = radialGrid(options);  
    break;
    case spiral:
      options         = spiralOptions();
      options.x       = grid.x;
      options.y       = grid.y;
      options.rscaler = grid.rscaler;
      options.ascaler = grid.ascaler;
      options.r       = grid.r;
      options.o       = grid.o;
      options.rdelta  = grid.rdelta;
      options.adelta  = grid.adelta;
      options.jewels  = grid.jewels;
      options.rings   = grid.rings;
      options.bound   = grid.bound;
      options.order   = grid.order;
      out = spiralGrid(options);
    break;
    default:
      options         = cartesianOptions()
      options.x       = grid.x;
      options.y       = grid.y;
      options.w       = grid.w;
      options.h       = grid.h;
      options.rows    = grid.rows;
      options.cols    = grid.cols;
      options.xdelta  = grid.xdelta;
      options.ydelta  = grid.ydelta;
      options.xscaler = grid.xscaler;
      options.yscaler = grid.yscaler;
      options.bound   = grid.bound;
      options.order   = grid.order;
      out = cartesianGrid(options);
  }

  return out;
}//----------------------------------------------------------------------------

export default gridPoints;