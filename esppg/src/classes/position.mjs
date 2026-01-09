import Point from "./point.mjs";

//Position parameters of each shape--------------------------------------------
class Position {
  static total = 0;

  constructor(x=0, y=0, kind='') {
    this.x      =    x;
    this.y      =    y;
    if (kind) this.kind = kind;
    if (kind == 'center') this.center = new Point({id:'center'});
    if (kind == 'tlc'   ) this.tlc    = new Point({id:'tlc'});
    if (kind == 'trc'   ) this.trc    = new Point({id:'trc'});
    if (kind == 'blc'   ) this.blc    = new Point({id:'blc'});
    if (kind == 'brc'   ) this.brc    = new Point({id:'brc'});
    Position.total++;
  }
  //------------------------------------------------------------
  total() { return Position.total; }
}//----------------------------------------------------------------------------

export default Position;