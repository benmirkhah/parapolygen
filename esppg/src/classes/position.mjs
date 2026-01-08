//Position parameters of each shape--------------------------------------------
class Position {
  static total = 0;

  constructor(kind='center') {
    this.kind   = kind;
    this.center = new Point({id:'center'});
    this.tlc    = new Point({id:'tlc'});
    this.trc    = new Point({id:'trc'});
    this.blc    = new Point({id:'blc'});
    this.brc    = new Point({id:'brc'});
    Position.total++;
  }
  //------------------------------------------------------------
  total() { return Position.total; }
}//----------------------------------------------------------------------------

export default Position;