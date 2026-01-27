import G         from "./globals.mjs";
import { round } from "./randoms.mjs";
import Point     from "../classes/point.mjs";
//-------------------------------------------
const zero = 'zero';
//-----------------------------------------------------------------------------
export const cartesianOptions = () => {
  return {
    x      :        G.MID.x, //Center
    y      :        G.MID.y, //Center
    w      : G.WIDTH  - 100, //Width
    h      : G.HEIGHT - 100, //Height
    rows   :              4, //Rows
    cols   :             12, //Cols
    xdelta :             15, //X incremental delta
    ydelta :            100, //Y incremental delta
    xscaler:            1.1, //X exponential scaler
    yscaler:            1.1, //Y exponential scaler
  };
}//----------------------------------------------------------------------------

//Normal left to right order cartesian grid------------------------------------
export function cartesianNormal(dx=160, dy=160, rows=10, cols=6) {
  let pos    = Object.create(null);
  let table  = [zero];
  let points = [zero];
  let num    = 1;
  let x      = dx;
  let y      = dy;

  for (let r=1; r<rows; r++) {
    x = dx;
    table[r]=[];

    for (let c=1; c<cols; c++) {
      pos = { x:x , y:y }
      table[r][c] = pos;
      points[num] = pos;
      x += dx;
      num++;
    }
    y += dy;
  } //console.log(table);  //DEBUG
  
  return points;
}//----------------------------------------------------------------------------

function cartesianGrid() {
  let out = [new Point];

  return out;
}//----------------------------------------------------------------------------

export default cartesianGrid;