import RC             from "../utils/colors.mjs";
import Gradient       from "./gradient.mjs";

//Solid color or Gradient fill-------------------------------------------------
class Fill {
  fill = '#CCFF00'; //default
  
  constructor({
    kind  = 'random', //solid or gradient
    param =       '', //palette or color
  } = {}) {
    this.kind = kind;

    switch(kind) {
      case null      : this.fill = ''; break;
      case 'none'    : this.fill = ''; break;
      case 'random'  : this.fill = RC(param); break;
      case 'solid'   : this.fill = param ? param : RC('opaque'); break;
      case 'gradient':
        this.gradient = new Gradient(param); 
        //TODO: palette/param
        this.fill = 'url(#'+this.gradient.id+')';
        break;
      default: this.fill = RC('suset');
    }
  }
  //------------------------------------------------------------
  render() { return this.fill ? ' fill="'+this.fill+'" ' : ''; }
}
//-----------------------------------------------------------------------------

export default Fill;