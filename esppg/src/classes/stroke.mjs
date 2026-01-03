import { randomColor } from "../utils/ppg-colors.mjs";

//Stroke parameters of a shape-------------------------------------------------
class Stroke {
  constructor(color) {
    this.width   =    1;
    this.opacity = 0.25;
    this.color   = color ? color : randomColor('opaque');
  }
  //------------------------------------------------------------
  redner () {
    let out = '';
    out += 'stroke="'+this.color+'" ';
    out += (this.width   != 1) ?   'stroke-width="'+this.width  +'" ' : '';
    out += (this.opacity != 1) ? 'stroke-opacity="'+this.opacity+'" ' : '';
    return out;
  }
}
//-----------------------------------------------------------------------------

export default Stroke;