//Position parameters of each shape--------------------------------------------
class Position {
  static count = 0;

  constructor(kind='center') {
    this.kind   = kind;
    this.center = new Point({id:'center'});
    this.tlc    = new Point({id:'tlc'});
    this.trc    = new Point({id:'trc'});
    this.blc    = new Point({id:'blc'});
    this.brc    = new Point({id:'brc'});
    Position.count++;
  }
  //------------------------------------------------------------
  count() { return Position.count; }
}//----------------------------------------------------------------------------

export default Position;