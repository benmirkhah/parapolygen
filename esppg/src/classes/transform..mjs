//Rotation transform parameters of a shape-------------------------------------
export class Rotation {
  a = 0;
  
  constructor(a = 0) {
    this.a = a;
  }
  //------------------------------------------------------------
  render() {
    let out = 'rotate(';
    if(typeof(this.a) == 'number') {
      out += this.a;
    }
    out += ')';
    return out;
  }
}
//-----------------------------------------------------------------------------

//Scale transform parameters of a shape----------------------------------------
export class Scale {
  constructor(x=0, y=0) {
    this.x = x;
    this.y = y;
  }
}
//-----------------------------------------------------------------------------

//Skew transform parameters of a shape-----------------------------------------
export class Skew {
  constructor(x=0, y=0) {
    this.x = x;
    this.y = y;
  }
}
//-----------------------------------------------------------------------------

//Move transform parameters of a shape-----------------------------------------
export class Move {
  constructor(x=0, y=0) {
    this.x = x;
    this.y = y;
  }
}
//-----------------------------------------------------------------------------


//Transform parameters consisting of rotation, scale, skew, or translate-------
export class Transform {
  constructor({
    rotation = 0,
    scale    = null,
    skew     = null,
    move     = null,
  } = {}) {
    if(rotation) this.rotation = rotation;
    if(scale)    this.scale    =    scale;
    if(skew)     this.skew     =     skew;
    if(move)     this.move     =     move;
  }
}

export default Transform;