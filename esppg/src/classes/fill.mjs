import RC             from "../utils/colors.mjs";
import Gradient       from "./gradient.mjs";
import {allGradients} from "./gradient.mjs";

//Solid color or Gradient fill-------------------------------------------------
class Fill {
  
  constructor({
    kind  = 'random', //solid or gradient
    param =       '', //palette or color
  } = {}) {
    this.kind  = kind;
    this.color = '';

    switch(kind) {
      case 'random'  : this.color = RC(); break;
      case 'solid'   : this.color = param ? param : RC('opaque'); break;
      case 'gradient':
        this.gradient = new Gradient(); 
        this.color = '#CCFF00';
        ///////////////TODO 
        break;
      default: this.color = RC('suset');
    }
  }
  //------------------------------------------------------------
  render() {
    let out = '';

    return out;
  }
}
//-----------------------------------------------------------------------------

export default Fill;