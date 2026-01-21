import Point from "./point.mjs";
import Size  from "./size.mjs";
import G     from "../utils/globals.mjs";
//Syntax sugar---------------------------
const normal = 'normal';
const radial = 'radial';
const spiral = 'spiral';

//Every Group can have its own Cartesian, Radial or Spiral grid----------------
class Grid {
  constructor(id, kind=normal) {
    this.id       =  id ?? 'cartesian';
    this.kind     =               kind;  //normal / radial / spiral
    this.show     =                  0;
    this.text     =                  0;  //false or color;
    this.bound    =              false;  //true = delete points that fall outside of bounding box, false = keep  
    this.order    =             normal;  //normal (horizontal), backward, vertical, vertiback, (TODO: snake, vsnake, outward, inward)
    this.size     =           new Size;
    this.center   =              G.MID;
    this.color    =        '#CC9900';
    this.group    =          'builtin';
    //---------------------------------
    switch (kind) {
      case normal:
        this.cols   =                8;
        this.rows   =                6;
        this.size.h =    G.MID.x - 100;
        this.size.w =    G.MID.y - 100;
        this.xdelta =              100;
        this.ydelta =              100;
        break;
      case radial:
        this.rings  =                2;
        this.jewels =               12; //Every 15 degrees
        this.adelta =               15; //12 portions like clocks
        this.rdelta =              100;
        this.size.r =              100; //inner-most ring radius
        this.size.o =    G.MID.y - 100; //outer-most ring radius
        break;
      case spiral:
        this.rings  =                2;
        this.jewels =               12; //Every 15 degrees
        this.adelta =               15; //12 portions like clocks
        this.rdelta =              100;
        this.size.r =              100; //inner-most ring radius
        this.size.o =    G.MID.y - 100; //outer-most ring radius
        break;          
    }
  }
  //------------------------------------------------------------
  //points() { return svgGridPoints(this); }
  //------------------------------------------------------------
  render() {
    let out = '';
    return out;
  }
  //------------------------------------------------------------  
}

export default Grid;