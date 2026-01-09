//Size based on width/height, or radius----------------------------------------
class Size {
  constructor({
    w = 0, //Width
    h = 0, //Height
    r = 0, //Radius (inner)
    o = 0, //Outer radius
  } = {}) {
    //Keep arg > 0
    if(w) this.w = w;
    if(h) this.h = h;
    if(r) this.r = r;
    if(o) this.o = o;
  } 
  //------------------------------------------------------------
  log() {
    let out = 'l[ ';
    out += this.w  ?  'w:'+this.w +' ' : '';
    out += this.h  ?  'h:'+this.h +' ' : '';
    out += this.r  ?  'r:'+this.r +' ' : '';
    out += this.o  ?  'o:'+this.o +' ' : '';
    out += ']';
    console.log(out);
    return out;
  }
  //------------------------------------------------------------
  duplicate() {
    let out = new Object(null);
    if(typeof(this.w) == 'number') out['w'] = this.w;
    if(typeof(this.h) == 'number') out['h'] = this.h;
    if(typeof(this.r) == 'number') out['r'] = this.r;
    if(typeof(this.o) == 'number') out['o'] = this.o;
    return out;
  }
}//----------------------------------------------------------------------------

export default Size;