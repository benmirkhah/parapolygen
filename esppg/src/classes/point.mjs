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
  render(style='circle', text, size, color) {
    let out = '';
    switch (style) {
      case 'circle' : out = this.circle(text, size, color); break;
      case 'cross'  : out = this.cross( text, size, color); break;
      case 'xmark'  : out = this.xmark( text, size, color); break;
      default       : out = this.circle(this.count(),5,'red');
    }
    return out;
  }
  //------------------------------------------------------------
  circle(text='', size=4, color='gold') {
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
  xmark(text='', size=3, color='gold') {
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
  cross(text='', size=5, color='gold') {
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