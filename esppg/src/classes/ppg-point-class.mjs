//Any point on either a Cartesian or Radial grid-------------------------------
class Point {
  static count = 0;

  constructor({
    id = '',  //Name (center, tlc, grid #, etc.)
    n  =  0,  //Itaration number
    x  =  0,
    y  =  0,
    z  =  0,
    r  =  0,
    a  =  0,
  } = {}) { //To conserve memory only x,y are assigned by default
    Point.count++;
    this.x  =  x;
    this.y  =  y;
    if(id) this.id = id;
    if(n)  this.n  =  n;
    if(r)  this.r  =  r;
    if(a)  this.a  =  a;
    if(z)  this.z  =  z;
  } 
  //------------------------------------------------------------
  count() { return Point.count; }
  //------------------------------------------------------------
  log() {
    let out = 'p[ ';
    out += this.id ? 'id:'+this.id+' ' : '';
    out += this.n  ?  'n:'+this.n +' ' : '';
    out += this.x  ?  'x:'+this.x +' ' : '';
    out += this.y  ?  'y:'+this.y +' ' : '';
    out += this.z  ?  'z:'+this.z +' ' : '';
    out += this.r  ?  'r:'+this.r +' ' : '';
    out += this.a  ?  'a:'+this.a +' ' : '';
    out += ']';
    console.log(out);
    return out;
  } 
}//----------------------------------------------------------------------------

export default Point;