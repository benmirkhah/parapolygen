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
  //------------------------------------------------------------
  render(size=3, color='gold', style='circle', text='') {
    let out = '';
    switch (style) {
      case 'circle' : out = this.circle(size, color, text);
      case 'cross'  : out = this.cross( size, color, text);
      case 'xmark'  : out = this.xmark( size, color, text);
      default       : out = this.circle(3,'red',this.count());
    }
    return out;
  }
  //------------------------------------------------------------
  circle(size=3, color='gold', text='') {
    let out = '';
    text = (text=='n') ? this.n : text;
    out += `<circle `;
    out += `cx="${this.x}" `;
    out += `cy="${this.y}" `;
    out += `r="${size}" `;
    out += `stroke="${color}" `;
    out += `class="point" `;
    out += `/>\r\n`;
    out += text ? `<text fill="${color}" x="${this.x-size}" y="${this.y+size+15}">${text}</text>\r\n` : '';  
    return out;
  }
  //------------------------------------------------------------
  xmark(size=3, color='gold', text='') {
    let out = '';
    text = (text=='n') ? this.n : text;
    out += '<path d="';
    out += ' M '+(this.x-size)+','+(this.y+size);
    out += ' L '+(this.x+size)+','+(this.y-size);
    out += ' M '+(this.x+size)+','+(this.y+size);
    out += ' L '+(this.x-size)+','+(this.y-size);
    out += `" stroke="${color}" `;
    out += `class="xmark" `; 
    out += `/>\r\n`;
    out += text ? `<text fill="${color}" x="${this.x-size}" y="${this.y+size+10}">${text}</text>\r\n` : '';  
    return out;
  }
  //------------------------------------------------------------
  cross(size=3, color='gold', text='') {
    let out = '';
    text = (text=='n') ? this.n : text;
    out += '<path d="';
    out += ' M '+(this.x-size)+','+ this.y;
    out += ' L '+(this.x+size)+','+ this.y;
    out += ' M '+ this.x      +','+(this.y-size);
    out += ' L '+ this.x      +','+(this.y+size);
    out += `" stroke="${color}" `;
    out += `class="cross" `; 
    out += `/>\r\n`;
    out += text ? `<text fill="${color}" x="${this.x+2}" y="${this.y+size+8}">${text}</text>\r\n` : '';  
    return out;
  }
}//----------------------------------------------------------------------------

export default Point;