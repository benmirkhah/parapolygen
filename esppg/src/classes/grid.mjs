import G          from "../utils/globals.mjs";
import RC         from "../utils/colors.mjs";
import Size       from "./size.mjs";
import { makeid } from "../utils/randoms.mjs";
import gridPoints from "../utils/gridpoints.mjs";
//Syntax sugar--------------------------------------------------
const normal = 'normal';
const radial = 'radial';
const spiral = 'spiral';
const opaque = 'opaque';

//Every Group can have its own Cartesian, Radial or Spiral grid----------------
class Grid {
  static total = 0;
  points = [];
  pcount =  0;
  n      =  0;  //Current point pointer

  constructor({
    id         =         '',
    kind       =     normal,
    order      =     normal,
    x          =    G.MID.x,
    y          =    G.MID.y,
    w          = G.MID.x-80,   
    h          = G.MID.y-80,
    r          =         50,
    o          =    G.MID.y,
    a          =          0,
    color      = RC(opaque),
    group      =  'builtin',
    size       =   new Size,
    cols       =          0,
    rows       =          0,  
    rings      =          0,
    jewels     =          0,
    xdelta     =          0,
    ydelta     =          0,
    adelta     =          0,
    rdelta     =          0,
    ascaler    =          0,
    rscaler    =          0,
    xscaler    =          0,
    yscaler    =          0,
    bound      =          0,
    show       =          0,
    text       =         '',
  } = {}) {
    this.id    = id ? id : 'XY' + makeid(4);
    this.kind  =                       kind; //normal / radial / spiral
    this.show  =                       show;
    this.text  =                       text; //false or color;
    this.bound =                      bound; //true = delete points that fall outside of bounding box, false = keep  
    this.order =                      order; //normal (horizontal), backward, vertical, vertiback, (TODO: snake, vsnake, outward, inward)
    this.x     =                          x;
    this.y     =                          y;
    this.size  =                       size;
    this.color =                      color;
    this.group =                      group;
    //--------------------------------------
    switch (kind) {
      case normal:
        if(w)       this.w        =       w;
        if(h)       this.h        =       w;
        if(cols)    this.cols     =    cols;
        if(rows)    this.rows     =    rows;
        if(xdelta)  this.xdelta   =  xdelta;
        if(ydelta)  this.ydelta   =  ydelta;
        if(xscaler) this.xscaler  = xscaler;
        if(yscaler) this.yscaler  = yscaler;
      break;
      //------------------------------------
      case radial:
        if(rings )  this.rings    =   rings; 
        if(jewels)  this.jewels   =  jewels; //Every 15 degrees
        if(adelta)  this.adelta   =  adelta; //12 portions like clocks
        if(rdelta)  this.rdelta   =  rdelta;
        if(r)       this.r        =       r; //inner-most ring radius
        if(o)       this.o        =       o; //outer-most ring radius
      break;
      //------------------------------------
      case spiral:
        if(rings )  this.rings    =   rings;  
        if(jewels)  this.jewels   =  jewels;  //Every 15 degrees
        if(adelta)  this.adelta   =  adelta;  //12 portions like clocks
        if(rdelta)  this.rdelta   =  rdelta; 
        if(ascaler) this.ascaler  = ascaler;
        if(rscaler) this.rscaler  = rscaler;
        if(r)       this.r        =       r;  //inner-most ring radius
        if(o)       this.o        =       o;  //outer-most ring radius
      break;
      //------------------------------------
    }

    this.points = gridPoints(this);
    Grid.total++;
  }
  //------------------------------------------------------------
  total() { return Grid.total; }
  //------------------------------------------------------------
  //points() { return gridPoints(this); }
  //------------------------------------------------------------
  render() {
    let out = '';
    this.points = gridPoints(this);
    this.points.forEach((point) => {
      out += point.render('cross',point.id,5,this.color);
    });
    return out;
  }
  //------------------------------------------------------------  
}
//-----------------------------------------------------------------------------
export default Grid;