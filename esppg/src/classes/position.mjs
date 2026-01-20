import { isObj } from "../utils/typeutils.mjs";
import Point     from "./point.mjs";

//Position parameters of each shape--------------------------------------------
class Position {
  constructor(x=0, y=0, kind='') {
    this.x =  x;
    this.y =  y;
    if (kind) this.kind = kind;
    switch (kind) {
      case 'center': this.center = new Point({id:'center', x:x, y:y }); break;
      case 'tlc'   : this.tlc    = new Point({id:'tlc'   , x:x, y:y }); break;
      case 'trc'   : this.trc    = new Point({id:'trc'   , x:x, y:y }); break;
      case 'blc'   : this.blc    = new Point({id:'blc'   , x:x, y:y }); break;
      case 'brc'   : this.brc    = new Point({id:'brc'   , x:x, y:y }); break;
    }
  }
  //------------------------------------------------------------
  render() {
    let out = '';
    out += isObj(this.center) ? this.center.render(): '' ;
    out += isObj(this.tlc)    ? this.tlc.render()   : '' ;
    out += isObj(this.trc)    ? this.trc.render()   : '' ;
    out += isObj(this.blc)    ? this.blc.render()   : '' ;
    out += isObj(this.brc)    ? this.brc.render()   : '' ;
    return out;
  }
  //------------------------------------------------------------
  log() {
    let out = '';
    out += isObj(this.center) ? this.center.log(): '' ;
    out += isObj(this.tlc)    ? this.tlc.log()   : '' ;
    out += isObj(this.trc)    ? this.trc.log()   : '' ;
    out += isObj(this.blc)    ? this.blc.log()   : '' ;
    out += isObj(this.brc)    ? this.brc.log()   : '' ;
    return out;
  }
  //------------------------------------------------------------
  next() {
    if (isObj(this.center)) this.center.next();
    if (isObj(this.tlc)   ) this.tlc.next()   ;
    if (isObj(this.trc)   ) this.trc.next()   ;
    if (isObj(this.blc)   ) this.blc.next()   ;
    if (isObj(this.brc)   ) this.brc.next()   ;
    if (isObj(this.x  )   ) this.x.next()     ;
    if (isObj(this.y  )   ) this.y.next()     ;
    return {   value: this, done: false      };
  }
}//----------------------------------------------------------------------------

export default Position;