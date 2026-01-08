//Any width, height, or radius----------------------------------------------
class Size {
  constructor({
    w  =  0,
    h  =  0,
    r  =  0,
  } = {}) {
    this.w  =  w;
    this.h  =  h;
    this.r  =  r;
  } 
  //------------------------------------------------------------
  log() {
    let out = 'l[ ';
    out += this.w  ?  'w:'+this.w +' ' : '';
    out += this.h  ?  'h:'+this.h +' ' : '';
    out += this.r  ?  't:'+this.r +' ' : '';
    out += ']';
    console.log(out);
    return out;
  }
}//----------------------------------------------------------------------------

export default Size;