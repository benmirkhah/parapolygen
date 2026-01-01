import { randomColor } from "../helpers/ppg-colors.mjs";

//Stroke parameters of a shape-------------------------------------------------
class Stroke {
  constructor(color) {
    this.width   =    1;
    this.opacity = 0.25;
    this.color   = color ? color : randomColor('opaque');
  }
}//----------------------------------------------------------------------------

export default Stroke;